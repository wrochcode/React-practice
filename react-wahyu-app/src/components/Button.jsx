import clsx from 'clsx'

// const Button = (props) =>{
// function Button({ className = ' bg-green-600 ', children, text, type = 'submit', ...props }) {
//   return (
//     <button
//       // type={props.type}
//       {...props}
//       type={type}
//       className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1  flex items-center gap-x-2text-white px-4 py-2 rounded')}>
//       {/* Hiiilllooo */}
//       {text || children}
//     </button>
//   )
// }

// // const Button = (props) =>{
function Button(props) {
  const { className = ' bg-green-600 ', children, text, type = 'submit' } = props
  return (
    <button
      // type={props.type}
      {...props}
      type={type}
      className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1  flex items-center gap-x-2text-white px-4 py-2 rounded')}>
      {/* Hiiilllooo */}
      {text || children}
    </button>
  )
}

export default Button
