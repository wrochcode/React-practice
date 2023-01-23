import { useRef } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input.jsx'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  // ================================================================================
  // tidak re-render:
  // const tick = useRef(0)

  // function handleClick() {
  //   tick.current = tick.current + 1
  //   console.info(tick)
  // }
  // ================================================================================

  // ================================================================================
  // render:
  // const [tick, setTick] = useState(0)

  // function handleClick() {
  //   const nextTick = tick + 1
  //   setTick(nextTick)
  //   console.info(nextTick)
  // }
  // ================================================================================
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Use Ref Hooks</Card.Title>
        {/* <Inputv1 isFocused className= {'border border-slate-500 rounded-lg'}/> */}
        {/* focus only first column or last column will be happend */}
        <Input isFocused name={'email'} className={'border border-slate-500 rounded-lg'} placeholder={'Email'} />
        <Input name={'password'} className={'border border-slate-500 rounded-lg'} placeholder={'Password'} />
        <Button onClick={handleClick}>Hit me!</Button> <Card.Footer>{/* <Card.Body>You clicked {tick} times.</Card.Body> */}</Card.Footer>
      </Card>
    </PlaceContentCenter>
  )
}

export default App
