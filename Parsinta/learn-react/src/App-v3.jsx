import { useState } from 'react'
import Counter from './components/Counter'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  

  return (
    <PlaceContentCenter>
      <Counter initialValue={0} />
      {/* <Counter/> */}
    </PlaceContentCenter>
  )
}

export default App
