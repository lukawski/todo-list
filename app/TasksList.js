import Timer from './Timer'

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
    const fragment = document.createDocumentFragment()
    const dataContainer = document.createElement('div')
    dataContainer.classList.add('flex')

    tasks.forEach(item => {
      const container = document.createElement('div')
      const title = document.createElement('p')
      const timerContainer = document.createElement('p')
      const timerBtn = document.createElement('button')
      const checkbox = document.createElement('input')
      const checkboxText = document.createTextNode('Completed')

      container.id = item.id
      container.classList.add('task')
      if (item.active) container.classList.add('active')

      title.textContent = item.name
      title.classList.add('task-title')

      timerContainer.textContent = Timer.calculateTime(item.duration)
      timerContainer.classList.add('timer-time')

      timerBtn.textContent = 'Start'
      timerBtn.setAttribute('data-action', 'start')
      timerBtn.classList.add('timer-btn')

      checkbox.type = 'checkbox'

      container.appendChild(title)
      container.appendChild(timerContainer)
      container.appendChild(timerBtn)
      container.appendChild(checkbox)
      container.appendChild(checkboxText)
      dataContainer.appendChild(container)
    })
    fragment.appendChild(dataContainer)
    root.appendChild(fragment)
  }

  static update (tasks, root, old) {
    const fragment = document.createDocumentFragment()
    const dataContainer = document.createElement('div')
    dataContainer.classList.add('flex')

    tasks.forEach(item => {
      const container = document.createElement('div')
      const title = document.createElement('p')
      const timerContainer = document.createElement('p')
      const timerBtn = document.createElement('button')
      const checkbox = document.createElement('input')
      const checkboxText = document.createTextNode('Completed')

      container.id = item.id
      container.classList.add('task')
      if (item.active) container.classList.add('active')

      title.textContent = item.name
      title.classList.add('task-title')

      timerContainer.textContent = Timer.calculateTime(item.duration)
      timerContainer.classList.add('timer-time')

      timerBtn.textContent = 'Start'
      timerBtn.setAttribute('data-action', 'start')
      timerBtn.classList.add('timer-btn')

      checkbox.type = 'checkbox'

      container.appendChild(title)
      container.appendChild(timerContainer)
      container.appendChild(timerBtn)
      container.appendChild(checkbox)
      container.appendChild(checkboxText)
      dataContainer.appendChild(container)
    })
    fragment.appendChild(dataContainer)
    root.replaceChild(fragment, old)
  }

  static updateElement (element, task) {
    task.active ? element.classList.remove('active') : element.classList.add('active')
    task.active = !task.active
  }
}
