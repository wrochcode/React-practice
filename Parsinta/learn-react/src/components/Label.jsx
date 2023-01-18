function Label({ children, value, ...props }) {
  return <label {...props} className={' text-white mb-2 mt-3 block'}>{children || value}</label>
}
export default Label
