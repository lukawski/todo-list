export default class Timer {
  static start () {
    this.interval = setInterval(() => console.log('!'), 1000)
  }

  static stop () {
    clearInterval(this.interval)
  }
}
