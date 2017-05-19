export default class Task {
  constructor (id, name) {
    this.id = id
    this.name = name
  }

  get taskInfo () {
    return {
      id: this.id,
      name: this.name
    }
  }
}
