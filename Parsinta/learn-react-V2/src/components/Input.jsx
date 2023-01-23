import { useEffect, useRef } from "react"

const Input =({isFocused = false, type='text', ...props}) => {
  const inputRef = useRef(null)

  useEffect(()=>{
    if(isFocused){
      inputRef.current.focus()
    }
  },[])
  return (
    <input
    ref = {inputRef}
      type={type}
      {...props}
      className={' w-full focus:outline-none p-2 focus:ring-green-400 focus:border-green-400 border-green-400 ring-2 shadow-sm rounded-md text-slate-800 mt-3 mb-3 h-9'}
    />
  )
}

export default Input

// default:
  
//   const Input =({type='text', ...props}) => {
//     return (
//       <input
//         type={type}
//         {...props}
//         className={' w-full focus:outline-none focus:ring-green-400 focus:border-green-400 border-gray-400 shadow-sm rounded-md text-slate-800 mt-3 mb-3 h-9'}
//       />
//     )
//   }
  
//   export default Input
  

// use fordwardref:
// const Input = forwardRef(({type='text', ...props}, ref) => {
//   return (
//     <input
//     ref={ref}
//       type={type}
//       {...props}
//       className={' w-full focus:outline-none focus:ring-green-400 focus:border-green-400 border-gray-400 shadow-sm rounded-md text-slate-800'}
//     />
//   )
// })