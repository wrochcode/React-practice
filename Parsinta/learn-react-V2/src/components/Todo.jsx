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
    // setTasks((prevTasks) => [...prevTasks, newTask])
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ])
    // reset input column
    setNewTask('')
  }

  function handleCompleteTask(id) {
    // console.info(id)
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
          // completed: true,
        }
      }
      return task
    })

    setTasks(updateTask)
  }

  function handleRemoveTask(id){
    const removeTask = tasks.filter(task =>task.id !==id)
    // console.info(removeTask)
    setTasks(removeTask)

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
        {tasks.length > 0 ? (
          <ol className={' mt-5 space-y-1'}>
            {tasks.map((task) => (
              <li key={task.id} className={'flex items-center justify-between'}>
                <span>
                  {task.name}
                  {task.completed ? ' ✅' : ' ❌'}
                  {/* {task.completed ? ' Complete' : ' Incomplete'} */}
                </span>
                <div className='flex items-center gap-x-2'>
                  <button onClick={() => handleCompleteTask(task.id)} className='px-2 py-1 border text-xs'>
                    Mark as {task.completed? 'Complete':'Incomplete'}
                  </button>
                  <button onClick={() => handleRemoveTask(task.id)} className='px-2 py-1 border text-xs'>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>You Have {tasks.length} Task</Card.Footer>
    </Card>
    // </div>
  )
}

export default Todo
