export default class TasksList {
  constructor (root) {
    this.root = document.getElementById(root)
  }

  render (tasks) {
    let fragment = document.createDocumentFragment()
    let ul = document.createElement('ul')
    fragment.appendChild(ul)
    tasks.forEach(item => {
      const li = document.createElement('li')
      li.innerHTML = item.name
      fragment.childNodes[0].appendChild(li)
    })
    this.root.appendChild(fragment)
  }
}
