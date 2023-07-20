import { useState } from 'react'
import Button from './components/Button'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
//   const [text, setText] = useState('Minim pariatur qui in esse cupidatat.')
  const [counter, setCounter] = useState(0)

  function handleClick() {
    // setText('i love u')
    // console.log(text)

    // const nextCounter = counter + 1
    // setCounter(nextCounter)
    // sama dengan
    setCounter((x) => x + 1)

    // console.log(setCounter)
  }
  return (
    <PlaceContentCenter>
      {/* <div>{text}</div> */}
      <h4 className='text-2xl font-semibold pb-3'>Total Click: {counter}</h4>
      <div className=' mt-3 flex items-center gap-2'>
        <Button onClick={handleClick}> + 1</Button>
        <Button
          onClick={() => {
            handleClick()
            handleClick()
            handleClick()
          }}>
          + 3
        </Button>
      </div>
    </PlaceContentCenter>
  )
}

export default App
