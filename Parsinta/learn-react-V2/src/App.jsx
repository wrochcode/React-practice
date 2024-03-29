import React, { useEffect, useState } from 'react'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import PlaceContentCenter from './components/PlaceContentCenter'

function App(props) {
  const [name, setName] = useState('')
  const [online, setOnline] = useState(false)
  const [onlineText, setOnlineText] = useState('Offline')
  const [colorButton, setColorButton] = useState('bg-red-600')

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

  //tambahan:
  function toOnline() {
    onlineText == 'Offline' ? setOnlineText('Online') : setOnlineText(onlineText)
    onlineText == 'Offline' ? setColorButton('bg-green-600') : setColorButton(colorButton)
  }
  function toOffline() {
    onlineText == 'Online' ? setOnlineText('Offline') : setOnlineText(onlineText)
    onlineText == 'Online' ? setColorButton('bg-red-600') : setColorButton(colorButton)
  }

  return (
    <PlaceContentCenter>
      Position: <Button className={`${colorButton} pointer-events-none h-7 w-14`}>{onlineText}</Button>
      <Input isFocused value={name} onChange={(e) => setName(e.target.value)} />
      <div className={' flex justify-center items-center mt-4 gap-4'}>
        <Button className={`bg-green-600`} onClick={toOnline}>
          Set Online
        </Button>
        <Button className={`bg-red-600`} onClick={toOffline}>
          Set Offline
        </Button>
      </div>
    </PlaceContentCenter>
  )
}

export default App
