export default class TasksList {
  static render (tasks, root) {
    let fragment = document.createDocumentFragment()
    let ul = document.createElement('ul')
    fragment.appendChild(ul)
    tasks.forEach(item => {
      const li = document.createElement('li')
      const btn = document.createElement('button')
      li.id = item.id
      li.innerHTML = item.name
      li.appendChild(btn)
      fragment.childNodes[0].appendChild(li)
    })
    document.getElementById(root).appendChild(fragment)
  }
}
