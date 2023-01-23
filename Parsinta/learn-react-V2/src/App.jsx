import React, { useEffect, useState } from 'react'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import PlaceContentCenter from './components/PlaceContentCenter'

function App(props) {
  const [name, setName] = useState('')
  const [online, setOnline] = useState(false)

  // var-1 =>terpanggil jika render terjadi
  useEffect(() => {
    console.info(`render happened`)
  })

  // var-2 =>terpanggil jika render terjadi di awal aja
  useEffect(() => {
    console.info(`render happened v2`)
  }, [])

  // var-3 =>terpanggil jika render terjadi jika di trigger
  useEffect(() => {
    console.info(`i am ${online ? 'Online' : 'offline'}.`)
  }, [online])

  // var-4
  useEffect(() => {
    return () => {}
  })

  return (
    <PlaceContentCenter>
      <Input isFocused value={name} onChange={(e) => setName(e.target.value)} />
      <Button
        onClick={() => {
          setOnline((online) => !online)
        }}>
        Set Online
      </Button>
    </PlaceContentCenter>
  )
}

export default App
