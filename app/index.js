import Task from './Task'
import TasksList from './TasksList'
import Timer from './Timer'
import './index.css'

const root = document.getElementById('root')
const filtersList = document.getElementById('filters-list')
const tasks = new TasksList()
let tasksContainer = document.getElementById('tasks')

for (let i = 0; i < 10; i++) {
  const singleTask = Task.create(i, `Task ${i}`, true, 0)
  tasks.add(singleTask)
}
TasksList.render(tasks.tasksList, tasksContainer)

let interval
let timerActive = false

tasksContainer.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    if (timerActive && e.target.getAttribute('data-action') !== 'stop') return false

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
  } else if (e.target.nodeName === 'INPUT') {
    const taskID = Number(e.target.parentNode.id)
    const task = tasks.find(taskID)
    TasksList.updateElement(e.target.parentNode, task)
  } else return false
})

filtersList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return false

  const btnBool = Boolean(Number(e.target.getAttribute('data-bool')))
  const filteredTasks = tasks.tasksList.filter(item => item.active === btnBool)
  const dataContainer = tasksContainer.childNodes[0]
  console.log(tasksContainer)
  TasksList.update(filteredTasks, tasksContainer, dataContainer)
})

function setBtn (attribute, value, element) {
  element.setAttribute(attribute, value)
  element.innerText = value
}
