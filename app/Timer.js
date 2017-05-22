export default class Timer {
  static start (interval) {
    this.interval = setInterval(() => console.log('!'), 1000)
  }

  static stop (interval) {
    clearInterval(interval)
  }

  static isActive () {
    return this.interval
  }
}
