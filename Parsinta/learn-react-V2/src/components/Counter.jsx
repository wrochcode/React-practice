import { useState } from 'react'
import Button from './Button'
import Card from './Card'

// function Counter( {name, setName, count, setCount}) {
function Counter({initialValue}) {
  // const name = `Excel`
  const [name, setName] = useState('Excel')
  //count:
  const [count, setCount] = useState(initialValue)
  

  function handleClick() {
    // name = `Excel Shelby`
    name == 'Excel' ? setName('Excel Shelby') : setName('Excel')

    // if (name == 'Excel') {
    //   setName('Excel Shelby')
    // } else {
    //   setName('Excel')
    // }
  }

  function addNumber() {
    setCount((count) => count + 1)
  }
  return (
    <div>
      <div className={'items-center justify-center'}>
        {/* Card1 */}
        <Card>
          <h1 className={' flex justify-center items-center text-2xl underline'}>Ubah Nama</h1>
          <div className={' flex justify-center items-center mt-4'}>hi {name}</div>
          <div className={' flex justify-center items-center'}>
            <Button onClick={handleClick} className={`bg-blue-900 mt-7`}>
              Change Name
            </Button>
          </div>
        </Card>
        {/* card2: */}
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
    </div>
  )
}

export default Counter
