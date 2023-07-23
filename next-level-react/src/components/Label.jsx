function Label({ value, children, ...props }) {
  return (
    <label className='text-violet-300 mb-1 block ' {...props}>
      {value || children}
    </label>
  )
}

export default Label
