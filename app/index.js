import Task from './Task'
import TasksList from './TasksList'
import Timer from './Timer'
import './index.css'

const tasks = []
for (let i = 0; i < 10; i++) {
  const singleTask = new Task(i, `Task ${i}`, 'active', 0)
  tasks.push(singleTask)
}
TasksList.render(tasks, 'root')
Timer.start()
setTimeout(() => Timer.stop(), 2000)
