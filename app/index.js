import Task from './Task'
import TasksList from './TasksList'
import './index.css'

const tasks = []
for (let i = 0; i < 10; i++) {
  const singleTask = new Task(`Task ${i}`, 'description')
  tasks.push(singleTask)
}

const tL = new TasksList('root')
tL.render(tasks)
