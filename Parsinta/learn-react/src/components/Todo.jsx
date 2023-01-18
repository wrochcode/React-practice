import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'

function Todo() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddTask(e) {
    e.preventDefault()
    // console.info('new task')
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    // <div>
      <Card>
        <Card.Title>Todo</Card.Title>
        <Card.Body>
          <form>
            <div className='flex items-center gap-x-2'>
              <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
              <Button text={'Add Task'} onClick={handleAddTask} />
            </div>
          </form>
        </Card.Body>
        <Card.Footer>You Have {tasks.length} Task</Card.Footer>
      </Card>
    // </div>
  )
}

export default Todo
