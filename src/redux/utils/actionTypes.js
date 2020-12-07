function getRandomString (length) {
  return Math.random().toString(36).substr(2, length).split("").join('.')
}
export default {
  INIT: `@redux/INIT${getRandomString(6)}`,
  PROBE_UNKNOWN_ACTION: `@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
}