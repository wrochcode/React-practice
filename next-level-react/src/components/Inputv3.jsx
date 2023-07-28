import { forwardRef, useEffect, useRef } from 'react'

const Inputv3 = forwardRef(({ type = 'text', ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className='my-2 w-full h-8 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-yellow-300 shadow-sm rounded text-black transition duration-300 px-2'
    type={type}
  />
))

export default Inputv3
