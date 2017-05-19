export default class Task {
  constructor (name, description) {
    this.name = name
    this.description = description
  }

  get taskInfo () {
    return {
      name: this.name,
      description: this.description
    }
  }
}
