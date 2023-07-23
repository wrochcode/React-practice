import { useState } from 'react'
import Button from './Button'

// function Counter({ counter, setCounter }) {
function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue)
  function handleClick() {
    setCounter((x) => x + 1)
  }
  return (
    <div className=' bg-blue-800 p-2 shadow-white'>
      <h4 className='text-2xl grid place-content-center font-semibold pb-1 '>Total Click: {counter}</h4>
      <div className='grid place-content-center'>
        <div className=' mt-3 flex items-center gap-2'>
          <Button className=' bg-blue-950' onClick={handleClick}>
            + 1
          </Button>
          <Button
            className=' bg-blue-950'
            onClick={() => {
              handleClick()
              handleClick()
              handleClick()
            }}>
            + 3
          </Button>
          <Button
            className=' bg-blue-950'
            onClick={() => {
              handleClick()
              handleClick()
              handleClick()
              handleClick()
              handleClick()
            }}>
            + 5
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
