import { useRef } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Inputv2 from './components/Inputv2'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  // const tick = useRef(0)
  const inputRef = useRef(null)
  // const [tick, setTick] = useState(0)

  //  no re-render:
  function handleClick() {
    // inputRef.current.focus()
    console.info(inputRef)
  }
  //  no re-render:
  // function handleClick() {
  //   tick.current = tick.current+1
  //   console.log(`tick : ${tick}`)
  //   console.log(`tick current: ${tick.current}`)
  // }
  // re-render:
  // function handleClick() {
  //   const nextTick = tick+1
  //   setTick(nextTick)
  //   console.info(nextTick)
  // }
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>useRef Hook</Card.Title>
        <Card.Body>
          {/* <div className='grid place-content-start max-w-2xl'> */}
            {/* <div className='flex items-center'> */}
              {/* <input className='bordern text-black px-1 border-slate-600 mr-2' ref={inputRef}/> */}
              <Inputv2 placeholder='email' isFocused className='bordern text-black border-slate-600 mr-2' />
              <Inputv2 placeholder='password' className='bordern text-black py-7 px-1 border-slate-600 mr-2' />
              <Button className='bg-slate-900 my-7 border h-7 max-w-fit border-yellow-200' onClick={handleClick}>
                Tick
              </Button>
            {/* </div> */}
          {/* </div> */}
        </Card.Body>
        {/* <Card.Footer> you clicked {tick.current} times</Card.Footer> */}
      </Card>
    </PlaceContentCenter>
  )
}

export default App
