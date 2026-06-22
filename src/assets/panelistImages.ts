import moderator from './moderator.avif'
import panelist01 from './panelist-01.avif'
import panelist02 from './panelist-02.avif'
import panelist03 from './panelist-03.avif'
import panelist04 from './panelist-04.avif'

// Moderator (Raksha Naidoo) keyed by speaker id; panelists keyed by panelist id.
// Portraits are square (1:1) — shown in square frames, so object-position is a
// gentle nudge rather than a crop.
export const panelistImages: Record<string, string> = {
  'raksha-naidoo': moderator,
  'zoliswa-tshetshe': panelist01,
  'thabile-makgala': panelist02,
  'edward-pitsi': panelist03,
  'tony-lennox': panelist04,
}

export const panelistImagePosition: Record<string, string> = {
  'raksha-naidoo': '50% 20%',
  'zoliswa-tshetshe': '50% 18%',
  'thabile-makgala': '50% 20%',
  'edward-pitsi': '50% 28%',
  'tony-lennox': '50% 26%',
}
