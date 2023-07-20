// import { useState } from 'react'
import PlaceContentCenter from './components/PlaceContentCenter'
import Counter from './components/Counter'

function App() {
  // const [counter, setCounter] = useState(0)

  return (
    <PlaceContentCenter>
      {/* <Counter counter={counter} setCounter={setCounter}/> */}
      <Counter initialValue={0}/>
    </PlaceContentCenter>
  )
}

export default App
