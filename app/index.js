import Task from './Task'
import TasksList from './TasksList'
import Timer from './Timer'
import './index.css'

const tasks = new TasksList()
for (let i = 0; i < 10; i++) {
  const singleTask = Task.create(i, `Task ${i}`, 'active', 0)
  tasks.add(singleTask)
}
TasksList.render(tasks.tasksList, 'root')

const root = document.getElementById('root')
let interval
let timerActive = false
root.addEventListener('click', (e) => {
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

function setBtn (attribute, value, element) {
  element.setAttribute(attribute, value)
  element.innerText = value
}
