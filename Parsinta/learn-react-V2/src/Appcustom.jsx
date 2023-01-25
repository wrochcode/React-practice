import React, { useEffect, useState } from 'react'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import PlaceContentCenter from './components/PlaceContentCenter'

function App(props) {
  const [name, setName] = useState('')
  const [online, setOnline] = useState(false)
  const [onlineText, setOnlineText] = useState('Offline')
  const [colorButton, setColorButton] = useState('bg-green-600')

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
  function changeName() {
    onlineText == 'Offline' ? setOnlineText('Online') : setOnlineText('Offline')
    onlineText == 'Offline' ? setColorButton('bg-green-600') : setColorButton('bg-red-600')
    // console.info(onlineText)
  }

  return (
    <PlaceContentCenter>
      Position: <Button className={`${colorButton} pointer-events-none h-7 w-14`}>{onlineText}</Button>
      <Input isFocused value={name} onChange={(e) => setName(e.target.value)} />
      <div className={' flex justify-center items-center mt-4 gap-4'}>
        <Button
          className={`${colorButton}`}
          onClick={
            (() => {
              setOnline((online) => !online)
            },
            changeName)
          }>
          Set {onlineText}
        </Button>
        <Button
          className={`${colorButton}`}
          onClick={
            (() => {
              setOnline((online) => !online)
            },
            changeName)
          }>
          Set {onlineText}
        </Button>
      </div>
    </PlaceContentCenter>
  )
}

export default App
