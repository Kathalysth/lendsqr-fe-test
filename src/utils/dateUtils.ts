export const timeSince = timestamp => {
  const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000)

  let interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return `${interval} years`
  }

  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return `${interval} months`
  }

  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return `${interval} days`
  }

  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return `${interval} hours`
  }

  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return `${interval} minutes`
  }

  return `${Math.floor(seconds)} seconds`
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (
  value,
  formatting = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}
