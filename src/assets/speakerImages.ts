import taurai from './host-01.avif'
import fikile from './host-02.avif'
import raksha from './host-03.avif'
import gillian from './host-04.avif'
import cohen from './host-05.avif'
import melissa from './host-06.avif'
import angela from './host-07.avif'

export const speakerImages: Record<string, string> = {
  'taurai-nyaruwata': taurai,
  'fikile-mavangwa': fikile,
  'raksha-naidoo': raksha,
  'gillian-dona': gillian,
  'cohen-appanah': cohen,
  'melissa-chisoko': melissa,
  'angela-senosha': angela,
}

// object-position per portrait so faces sit in the upper third of the crop.
export const speakerImagePosition: Record<string, string> = {
  'taurai-nyaruwata': '50% 14%',
  'fikile-mavangwa': '50% 16%',
  'raksha-naidoo': '50% 20%',
  'gillian-dona': '50% 30%',   // face sits lower in frame — drop the crop down
  'cohen-appanah': '50% 18%',
  'melissa-chisoko': '50% 12%', // lots of headroom — pull the crop up
  'angela-senosha': '50% 15%', // adjust as needed
}
