import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  // const name = `Excel`
  const [name, setName] = useState('Excel')
  //count:
  const [count, setCount] = useState(0)

  function handleClick() {
    // name = `Excel Shelby`
    if (name == 'Excel') {
      setName('Excel Shelby')
    } else {
      setName('Excel')
    }
  }

  function addNumber() {
    setCount(count => count + 1)
  }

  return (
    <PlaceContentCenter >
    <div className={'items-center justify-center'}>

      <Card>
        <h1 className={' flex justify-center items-center text-2xl underline'}>Ubah Nama</h1>
        <div className={' flex justify-center items-center mt-4'}>hi {name}</div>
        <div className={' flex justify-center items-center'}>
          <Button onClick={handleClick} className={`bg-blue-900 mt-7`}>
            Change Name
          </Button>
        </div>
      </Card>
      <Card>
      <h1 className={' flex justify-center items-center text-2xl underline'}>Tambah Angka</h1>
        <h1 className={' flex justify-center items-center text-3xl'}> {count}</h1>
        <div className={' flex justify-center items-center mt-4 gap-4'}>
          <Button onClick={addNumber}>Add + 1</Button>
          <Button
              onClick={() => {
                addNumber()
                addNumber()
                addNumber()
              }}>
              Add + 3
            </Button>
        </div>
      </Card>
    </div>
    </PlaceContentCenter>
  )
}

export default App
