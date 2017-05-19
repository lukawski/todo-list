export default class Task {
  constructor (id, name, status, duration) {
    this.id = id
    this.name = name
    this.status = status
    this.duration = duration
  }

  get taskInfo () {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      duration: this.duration
    }
  }
}
