import Task from './Task'
import TasksList from './TasksList'
import Timer from './Timer'
import './index.css'

const root = document.getElementById('root')
const filtersList = document.getElementById('filters-list')
const tasks = new TasksList()
const checkbox = document.getElementsByTagName('input')
let tasksContainer = document.getElementById('tasks')

for (let i = 0; i < 10; i++) {
  const singleTask = Task.create(i, `Task ${i}`, true, 0)
  tasks.add(singleTask)
}
TasksList.render(tasks.tasksList, tasksContainer)

let interval
let timerActive = false

tasksContainer.addEventListener('click', e => {
  if ((e.target.nodeName !== 'BUTTON' || timerActive) && e.target.getAttribute('data-action') !== 'stop') return false

  const action = e.target.getAttribute('data-action')

  switch (action) {
    case 'start':
      timerActive = true
      setBtn('data-action', 'stop', e.target)
      const taskID = Number(e.target.parentNode.id)
      const task = tasks.find(taskID)
      const timerContainer = e.target.previousSibling

      interval = setInterval(() => {
        ++task.duration
        timerContainer.innerText = Timer.calculateTime(task.duration)
      }, 1000)
      break
    case 'stop':
      clearInterval(interval)
      timerActive = false
      setBtn('data-action', 'start', e.target)
      break
  }
})

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', e => {
    const taskID = Number(e.target.parentNode.id)
    const task = tasks.find(taskID)
    task.active = !task.active
    console.log(task)
  })
}

filtersList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return false

  const btnBool = Boolean(Number(e.target.getAttribute('data-bool')))
  const filteredTasks = tasks.tasksList.filter(item => item.active === btnBool)

  tasksContainer = document.getElementById('tasks')
  TasksList.update(filteredTasks, root, tasksContainer)
})

function setBtn (attribute, value, element) {
  element.setAttribute(attribute, value)
  element.innerText = value
}
