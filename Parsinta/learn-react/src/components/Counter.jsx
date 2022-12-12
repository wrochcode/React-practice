import { useState } from "react"
import Button from "./Button"

function Counter({initialValue}) {
    const [name, setName] = useState('Wahyu Tampan')
    const [count, setCount] = useState(initialValue)
    function handleClick() {
      if (name == 'Wahyu Tampan') {
        const nextName = 'Wahyu Tampan Banget'
        setName('Wahyu Tampan Banget')
      } else {
        setName('Wahyu Tampan')
      }
      setCount((x) => x + 1)
    }
    return (
      <div>
        <h1 className={' text-5xl font-semibold '}>{count}</h1>
        <div className='flex items-center gap-3'>
          <Button className='bg-yellow-600 mt-6 w-30   ' onClick={handleClick}>
            Change name <br></br>
            +1
          </Button>
          <Button
            className='bg-yellow-600 mt-6 w-30   '
            onClick={() => {
              handleClick()
              handleClick()
              handleClick()
            }}>
            Change name <br></br>
            +3
          </Button>
        </div>
      </div>
    )
}

export default Counter
