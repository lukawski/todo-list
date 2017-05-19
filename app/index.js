import Task from './Task'
import './index.css'

const root = document.getElementById('root')
const singleTask = new Task('task1', 'description')
console.log(singleTask.taskInfo)
console.log(root)
