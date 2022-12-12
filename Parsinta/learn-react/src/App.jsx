import { useState } from 'react'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import PlaceContentCenter from './components/PlaceContentCenter.jsx'

function App() {
  

  

  return (
    <PlaceContentCenter>
      <Counter initialValue={0}></Counter>
    </PlaceContentCenter>
  )
}

export default App
