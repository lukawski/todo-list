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

  static render (tasks, root, old) {
    const fragment = document.createDocumentFragment()
    const dataContainer = this.createElement('div', {class: 'flex'})

    tasks.forEach(item => {
      const dom = this.createElement('div',
        {
          id: item.id,
          class: `task ${item.active ? 'active' : ''}`
        },
        this.createElement('p',
          {
            class: 'task-title'
          },
            this.createElement('text', {}, item.name)
        ),
        this.createElement('p',
          {
            class: 'timer-time'
          },
          this.createElement('text', {}, Timer.calculateTime(item.duration))
        ),
        this.createElement('button',
          {
            dataAction: 'start',
            class: 'timer-btn'
          },
          this.createElement('text', {}, 'Start')
        ),
        this.createElement('input',
          {
            type: 'checkbox',
            checked: item.active
          }
        ),
        this.createElement('text', {}, 'Completed')
      )

      dataContainer.appendChild(dom)
    })

    fragment.appendChild(dataContainer)
    old ? root.replaceChild(fragment, old) : root.appendChild(fragment)
  }

  static updateElement (element, task) {
    task.active ? element.classList.remove('active') : element.classList.add('active')
    task.active = !task.active
  }

  static createElement (type, attrs) {
    let el
    if (type === 'text') {
      el = document.createTextNode(arguments[2])
    } else {
      el = document.createElement(type)
      const attributes = Object.keys(attrs)
      for (let key of attributes) {
        if (typeof attrs[key] === 'boolean' && attrs[key]) continue

        const attribute = /([A-Z])\w{0}/g.test(key) ? this.transformAttribute(key) : key
        el.setAttribute(attribute, attrs[key])
      }
      if (arguments[2]) {
        for (let i = 2; i < arguments.length; i++) {
          el.appendChild(arguments[i])
        }
      }
    }
    return el
  }

  static transformAttribute (attribute) {
    const upperLetters = attribute.match(/([A-Z])\w{0}/g)
    if (!upperLetters) return attribute
    let newKey
    upperLetters.forEach(letter => {
      console.log(attribute.indexOf(letter))
      newKey = `${attribute.slice(0, [attribute.indexOf(letter)])}-${attribute.slice(attribute.indexOf(letter))}`.replace(letter, letter.toLocaleLowerCase())
      console.log(newKey)
    })
    return newKey
  }
}
