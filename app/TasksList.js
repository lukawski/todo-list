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

    tasks.forEach(item => {
      const container = document.createElement('div')
      const title = document.createElement('p')
      const timerContainer = document.createElement('p')
      const timerBtn = document.createElement('button')

      container.id = item.id
      container.classList.add('task')

      title.textContent = item.name
      title.classList.add('task-title')

      timerContainer.textContent = '00:00:00'
      timerContainer.classList.add('timer-time')

      timerBtn.textContent = 'Start'
      timerBtn.setAttribute('data-action', 'start')
      timerBtn.classList.add('timer-btn')

      container.appendChild(title)
      container.appendChild(timerContainer)
      container.appendChild(timerBtn)
      fragment.appendChild(container)
    })
    root.appendChild(fragment)
  }

  static update (tasks, root, oldContainer) {
    let fragment = document.createDocumentFragment()
    const tasksContainer = document.createElement('div')

    tasksContainer.id = 'tasks'
    tasksContainer.classList.add('tasks')
    tasksContainer.classList.add('flex')

    tasks.forEach(item => {
      const container = document.createElement('div')
      const title = document.createElement('p')
      const timerContainer = document.createElement('p')
      const timerBtn = document.createElement('button')

      container.id = item.id
      container.classList.add('task')

      title.textContent = item.name
      title.classList.add('task-title')

      timerContainer.textContent = '00:00:00'
      timerContainer.classList.add('timer-time')

      timerBtn.textContent = 'Start'
      timerBtn.setAttribute('data-action', 'start')
      timerBtn.classList.add('timer-btn')

      container.appendChild(title)
      container.appendChild(timerContainer)
      container.appendChild(timerBtn)
      tasksContainer.appendChild(container)
    })
    fragment.appendChild(tasksContainer)
    root.replaceChild(fragment, oldContainer)
  }
}
