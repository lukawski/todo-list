export default class Task {
  static create (id, name, status, duration) {
    return {
      id,
      name,
      status,
      duration
    }
  }
}
