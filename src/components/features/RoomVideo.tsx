import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

interface RoomVideoProps {
  src: string
  poster?: string
  /** Used for the accessible label on the player. */
  title: string
}

function formatTime(seconds: number): string {
  const safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0
  const m = Math.floor(safe / 60)
  const s = Math.floor(safe % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

/**
 * Custom-chrome video player matching the Career Playbook editorial system:
 * charcoal control bar, gold scrubber, condensed-display timecodes. The native
 * controls are suppressed so the styling stays on-brand.
 */
export default function RoomVideo({ src, poster, title }: RoomVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  // Native aspect ratio (width / height), read from the loaded media.
  const [ratio, setRatio] = useState<number | undefined>(undefined)

  const progress = duration > 0 ? (current / duration) * 100 : 0

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      void v.play()
      setStarted(true)
    } else {
      v.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const seekFromPointer = useCallback((clientX: number) => {
    const v = videoRef.current
    const track = trackRef.current
    if (!v || !track || !Number.isFinite(v.duration)) return
    const rect = track.getBoundingClientRect()
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    v.currentTime = ratio * v.duration
    setCurrent(v.currentTime)
  }, [])

  const onTrackPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId)
      seekFromPointer(e.clientX)
    },
    [seekFromPointer],
  )

  const onTrackPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.buttons !== 1) return
      seekFromPointer(e.clientX)
    },
    [seekFromPointer],
  )

  const toggleFullscreen = useCallback(() => {
    const el = wrapRef.current
    if (!el) return
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void el.requestFullscreen?.()
    }
  }, [])

  // Keep React state in sync with the underlying media element.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTime = () => setCurrent(v.currentTime)
    const onMeta = () => {
      setDuration(v.duration)
      if (v.videoWidth && v.videoHeight) setRatio(v.videoWidth / v.videoHeight)
    }
    const onEnded = () => setPlaying(false)
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement))

    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('loadedmetadata', onMeta)
    v.addEventListener('ended', onEnded)
    document.addEventListener('fullscreenchange', onFs)
    return () => {
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('loadedmetadata', onMeta)
      v.removeEventListener('ended', onEnded)
      document.removeEventListener('fullscreenchange', onFs)
    }
  }, [])

  // Sizing strategy: width derives from the native ratio so the box fits
  // within an 80vh height cap and the container width, preserving aspect
  // ratio and centering. Defaults to portrait until metadata loads.
  const ar = ratio ?? 4 / 5

  return (
    <div
      ref={wrapRef}
      style={{ aspectRatio: String(ar), width: `min(100%, calc(60vh * ${ar}))` }}
      className="group relative mx-auto overflow-hidden rounded-lg border border-cream/12 bg-black"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        className="h-full w-full cursor-pointer object-cover"
      />

      {/* Center play button — shown before first play and whenever paused */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={started ? 'Resume video' : `Play ${title} video`}
          className="absolute inset-0 grid place-items-center bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/20 transition-colors"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-charcoal shadow-lg transition-transform duration-200 hover:scale-105 lg:h-20 lg:w-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 lg:h-8 lg:w-8" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* Control bar */}
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-charcoal/85 to-transparent px-4 pb-3 pt-8 transition-opacity duration-200',
          playing ? 'opacity-0 group-hover:opacity-100 focus-within:opacity-100' : 'opacity-100',
        )}
      >
        {/* Scrubber */}
        <div
          ref={trackRef}
          onPointerDown={onTrackPointerDown}
          onPointerMove={onTrackPointerMove}
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(current)}
          tabIndex={0}
          className="group/track relative h-3 cursor-pointer touch-none"
        >
          <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-cream/25">
            <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
          <div
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold opacity-0 transition-opacity group-hover/track:opacity-100"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Buttons + timecode */}
        <div className="flex items-center gap-4 text-cream">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Play'}
            className="transition-colors hover:text-gold"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="transition-colors hover:text-gold"
          >
            {muted ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M4 9v6h4l5 5V4L8 9H4zm12.5 3l2.5-2.5-1-1L15.5 11l-2.5-2.5-1 1L14.5 12 12 14.5l1 1 2.5-2.5L18 15.5l1-1L16.5 12z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M4 9v6h4l5 5V4L8 9H4zm11 .5a4 4 0 0 1 0 5l1 1a5.5 5.5 0 0 0 0-7zm2-2a7 7 0 0 1 0 9l1 1a8.5 8.5 0 0 0 0-11z" />
              </svg>
            )}
          </button>

          <span className="font-mono text-xs tracking-wide text-cream/80">
            {formatTime(current)} <span className="text-cream/40">/</span> {formatTime(duration)}
          </span>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? 'Exit full screen' : 'Full screen'}
            className="ml-auto transition-colors hover:text-gold"
          >
            {fullscreen ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M5 14h2v3h3v2H5v-5zm12 0h2v5h-5v-2h3v-3zM5 5h5v2H7v3H5V5zm12 0v5h-2V7h-3V5h5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
