import taurai from './host-1.jpg'
import fikile from './host-2.jpg'
import raksha from './host-3.jpg'
import gillian from './host-4.jpg'
import cohen from './host-5.jpg'
import melissa from './host-6.jpeg'

export const speakerImages: Record<string, string> = {
  'taurai-nyaruwata': taurai,
  'fikile-mavangwa': fikile,
  'raksha-naidoo': raksha,
  'gillian-dona': gillian,
  'cohen-appanah': cohen,
  'melissa-chisoko': melissa,
}

// object-position per portrait so faces sit in the upper third of the crop.
export const speakerImagePosition: Record<string, string> = {
  'taurai-nyaruwata': '50% 14%',
  'fikile-mavangwa': '50% 16%',
  'raksha-naidoo': '50% 20%',
  'gillian-dona': '50% 30%',   // face sits lower in frame — drop the crop down
  'cohen-appanah': '50% 18%',
  'melissa-chisoko': '50% 12%', // lots of headroom — pull the crop up
}
