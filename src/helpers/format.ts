import moment from 'moment'

export function formatDateTime(date: string, fromNow: boolean = false): string {
  const time = moment(date)
  if (!fromNow) {
    return `${time.format('YYYY/MM/DD HH:mm:ss')}`
  }
  return `${time.fromNow()}, ${time.format('YYYY/MM/DD HH:mm:ss')}`
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
