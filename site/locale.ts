import humanizeString from 'humanize-string'
import he from './public/locales/iw-IL'

interface Locale {
  [key: string]: string
}
const l = he as Locale

function t(key: string): string {
  return l[key] || humanizeString(key)
}
export default t
