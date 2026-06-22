// Per-room video assets. Keyed by room slug (see src/content/rooms.json).
//
// Drop the video file into src/assets named room_video_<slug>.mp4, import it
// here, and add an entry. Rooms not listed simply render no video section.
//
// Optional: add a matching entry to roomVideoPosters for a custom poster frame.

import aiFuture from './room_video_ai-future.mp4'
import getPromoted from './room_video_get-promoted.mp4'
import jobToBusiness from './room_video_job-to-business.mp4'
import makeInterview from './room_video_make-interview.mp4'

export const roomVideos: Record<string, string> = {
  'ai-future': aiFuture,
  'get-promoted': getPromoted,
  'job-to-business': jobToBusiness,
  'make-interview': makeInterview,
}

// Optional poster frame shown before playback. Falls back to the first
// video frame when a room has no poster.
export const roomVideoPosters: Record<string, string> = {
  // 'ai-future': aiFuturePoster,
}
