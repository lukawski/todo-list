import Task from './Task'
import TasksList from './TasksList'
import './index.css'

const tasks = new TasksList()
for (let i = 0; i < 10; i++) {
  const singleTask = Task.create(i, `Task ${i}`, 'active', 0)
  tasks.add(singleTask)
}
TasksList.render(tasks.tasksList, 'root')

const [listEl] = document.getElementsByTagName('ul')
let interval
listEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') return false

  const taskID = Number(e.target.parentNode.id)
  const task = tasks.find(taskID)
  const action = e.target.getAttribute('data-action')
  switch (action) {
    case 'start':
      setBtn('data-action', 'stop', e.target)
      interval = setInterval(() => task.duration++, 1000)
      break
    case 'stop':
      clearInterval(interval)
      setBtn('data-action', 'start', e.target)
      break
  }
  console.log(task)
})

function setBtn (attribute, value, element) {
  element.setAttribute(attribute, value)
  element.innerText = value
}
