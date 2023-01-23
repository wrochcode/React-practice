export default function Input({ type = 'text', ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={' w-full ring-1 focus:outline-none focus:ring-green-400 focus:border-green-400 border-gray-400 shadow-sm rounded-md text-slate-800'}
    />
  )
}
