import clsx from 'clsx'

const Button = (props) => {
  const { className = 'bg-blue-900', children, text, type = `submit` } = props

  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 font-medium whitespace-nowrap inline-flex justify-center items-center gap-x-2  text-white px-4 h-10 rounded'
      )}>
      {text || children}
    </button>
  )
}

export default Button

// const Button = (props) => {
// //   const { className = 'bg-blue-600', children, text, type = `submit` } = props
//   const { className = 'bg-blue-600', children, text, type = `submit` } = props
//   return (
//     <button
//       {...props}
//       type={type}
//       className={clsxx(className, '${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2  text-white px-4 py-2 rounded')}>
//       {text || children}
//     </button>
//   )
// }

// inline:
// function Button(props) {
// export default function Button({ className = 'bg-blue-600', children, text, type = `submit`, ...props }) {
// const Button = ({ className = 'bg-blue-600', children, text, type = `submit`, ...props }) => {
//     //   const { className = 'bg-blue-600', children, text, type = `submit` } = props

//       return (
//         <button
//           {...props}
//           type={type}
//           className={clsx(className, '${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2  text-white px-4 py-2 rounded')}>
//           {text || children}
//         </button>
//       )
//     }
