export default class TasksList {
  constructor () {
    this.list = []
  }

  add (task) {
    this.list.push(task)
  }

  find (id) {
    let [item] = this.list.filter(item => item.id === id)
    return item
  }

  get tasksList () {
    return this.list
  }

  static render (tasks, root) {
    let fragment = document.createDocumentFragment()
    let ul = document.createElement('ul')
    fragment.appendChild(ul)
    tasks.forEach(item => {
      const li = document.createElement('li')
      const btn = document.createElement('button')
      li.id = item.id
      li.innerHTML = item.name
      btn.innerText = 'Start'
      btn.setAttribute('data-action', 'start')
      li.appendChild(btn)
      fragment.childNodes[0].appendChild(li)
    })
    document.getElementById(root).appendChild(fragment)
  }
}
