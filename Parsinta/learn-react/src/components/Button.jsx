import clsx from 'clsx'

export default function Button(props) {
  const { text, children, className = 'bg-black', type = 'submit' } = props
  return (
    <button {...props} type={type} className={clsx(className, ` [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center text-white px-4 py-2 gap-x-2 rounded`)}>
      {text || children}
    </button>
  )
}
