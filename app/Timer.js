export default class Timer {
  static calculateTime (seconds) {
    const hour = Math.floor(seconds / 3600)
    const minute = Math.floor(seconds % 3600 / 60)
    const second = Math.floor(seconds % 3600 % 60)

    const hFormat = (hour < 10) ? `0${hour}` : hour
    const mFormat = (minute < 10) ? `0${minute}` : minute
    const sFormat = (second < 10) ? `0${second}` : second

    return `${hFormat}:${mFormat}:${sFormat}`
  }
}
