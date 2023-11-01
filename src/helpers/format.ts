import moment from 'moment'

export function formatDateTime(date: string | Date, fromNow: boolean = false): string {
  const time = moment(date)
  if (!fromNow) {
    return `${time.format('YYYY/MM/DD HH:mm:ss')}`
  }
  return `${time.fromNow()}, ${time.format('YYYY/MM/DD HH:mm:ss')}`
}

export function formatDate(date: string | Date, fromNow: boolean = false): string {
  const time = moment(date)
  if (!fromNow) {
    return `${time.format('YYYY/MM/DD')}`
  }
  return `${time.fromNow()}, ${time.format('YYYY/MM/DD')}`
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
