function Input({type='text', ...props}){
return <input{...props} className=' w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-yellow-300 shadow-sm rounded text-black transition duration-300 px-2' type={type} />
}

export default Input;