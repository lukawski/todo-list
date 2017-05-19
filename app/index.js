import Task from './Task'
import './index.css'

const root = document.getElementById('root')
const tasks = []
for (let i = 0; i < 10; i++) {
  const singleTask = new Task(`task${i}`, 'description')
  tasks.push(singleTask)
}

let fragment = document.createDocumentFragment()
let ul = document.createElement('ul')
fragment.appendChild(ul)
console.log(fragment.childNodes[0])
for (let i = 0; i < tasks.length; i++) {
  const li = document.createElement('li')
  li.innerHTML = tasks[i].name
  fragment.childNodes[0].appendChild(li)
}
root.appendChild(fragment)
