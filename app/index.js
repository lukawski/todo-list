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

const listEl = document.getElementsByTagName('ul')
listEl[0].addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') return false
  console.log(e.target.parentNode.id, e.target.getAttribute('data-action'))
  const action = e.target.getAttribute('data-action')
  switch (action) {
    case 'start':
      setBtn('data-action', 'stop', e.target)
      break
    case 'stop':
      setBtn('data-action', 'start', e.target)
      break
  }
})

function setBtn (attribute, value, element) {
  element.setAttribute(attribute, value)
  element.innerText = value
}
