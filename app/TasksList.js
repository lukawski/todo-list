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
      const btn = document.createElement('button')
      li.innerHTML = item.name
      li.appendChild(btn)
      fragment.childNodes[0].appendChild(li)
    })
    this.root.appendChild(fragment)
  }
}
