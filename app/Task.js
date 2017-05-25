export default class Task {
  static create (id, name, active, duration) {
    return {
      id,
      name,
      active,
      duration
    }
  }
}
