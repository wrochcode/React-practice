import { useState } from 'react'
import Counter from './components/Counter'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  const [name, setName] = useState('Excel')
  //count:
  const [count, setCount] = useState(0)

  return (
    <PlaceContentCenter>
      <Counter count={count} setCount={setCount} name={name} setName={setName} />
    </PlaceContentCenter>
  )
}

export default App
