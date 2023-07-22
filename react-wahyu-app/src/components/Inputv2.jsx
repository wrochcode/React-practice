import { useEffect, useRef } from 'react'

const Inputv2 = ({ isFocused = false, type = 'text', ...props }) => {
  const inputRef = useRef()

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <input
      ref={inputRef}
      {...props}
      className='my-2 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-yellow-300 shadow-sm rounded text-black transition duration-300 px-2'
      type={type}
    />
  )
}

export default Inputv2
