import { IconCheck, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'

function Todo() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddTask(e) {
    e.preventDefault()
    //  console.info(Math.floor(Math.random()* Date.now()))
    // setTasks(prevTasks => [...prevTasks, newTask])
    setTasks((prevTasks) => [...prevTasks, { id: Math.floor(Math.random() * Date.now()), name: newTask, completed: false }])
    setNewTask('')
    console.info('clicked')
  }

  function handleCompleteTask(id){
    const updateTask=tasks.map((task)=>{
        if(id== task.id){
            // return{... task,completed:true}
            return{... task,completed:!task.completed}
        }
        return task
    }) 
    setTasks(updateTask)
  }

  function handleRemoveTask(id){
const removeTask =    tasks.filter(task=>task.id!==id )
setTasks(removeTask)
  }
  return (
    <div>
      <Card>
        <Card.Title>To Do</Card.Title>
        <Card.Body>
          <form>
            <div className='flex items-center gap-2'>
              <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
              <Button text='Add Task' className='bg-blue-950 py-1 text-violet-100 h-8 inline-flex justify-center whitespace-nowrap  ' onClick={handleAddTask} />
            </div>
          </form>
          {tasks.length > 0 ? (
            <ol className={'space-y-2'}>
              {tasks.map((task) => (
                <li key={task.id} className='flex items-center justify-between my-2'>
                  <span>
                    {task.name} {task.completed ? 'Complete' : 'Incomplete'}
                  </span>
                  <div className='bg-transparent flex items-center'>
                    <Button onClick={()=>handleCompleteTask(task.id)} className='bg-transparent h-8 px-1'>
                      <IconCheck className='m-1' />
                      {task.completed?'Complete':'InComplete'}
                    </Button>
                    <Button onClick={()=>handleRemoveTask(task.id)} className='bg-transparent h-8 px-1 border-gray-100'>
                      <IconTrash className='m-1' />
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ol>
          ) : null}
        </Card.Body>
        <Card.Footer>You Have {tasks.length} Task.</Card.Footer>
      </Card>
    </div>
  )
}
export default Todo
