import Card from './components/Card'
import Button from './components/Button'
import Inputv3 from './components/Inputv3'
import PlaceContentCenter from './components/PlaceContentCenter'
import useJoke from './hooks/useJoke'
import { useRef, useState } from 'react'

function App(props) {
  const nameRef = useRef()//semacam menerima data
  const [name, setName] = useState('')
  const joke = useJoke(name) //hook

  const generateJoke = (e) => {
    e.preventDefault()
    setName(nameRef.current.value)
  }
  // const generateJoke = (e) => {
  //   e.preventDefault()
  // }
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Joke</Card.Title>

        <Card.Body>
          {joke.value}
          <Inputv3 ref={nameRef} />
          {/* <Inputv3 ref={nameRef} value={name} /> */}
          {/* <Inputv3 ref={nameRef} value={name} onChange={(e)=>setName(e.target.value)}/> */}
        </Card.Body>
        <Card.Footer>
          <Button onClick={generateJoke}>Generate Joke</Button>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  )
}
export default App
