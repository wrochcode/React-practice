function Card({ title, footer, children }) {
  return (
    // <div className='shadow bg-slate-50 border-yellow-400 border-spacing-5'>
    <div className='shadow bg-blue-950/60 border-yellow-400 border-spacing-5'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <div className=' leading-relaxed'>{children}</div>
      <div className='bg-violet-600 '>{footer}</div>
    </div>
  )
}

function Title({ children }) {
  return (
    <div className='p-4 border-b'>
      <h1 className='text-xl'>{children}</h1>
    </div>
  )
}
function Body({ children }) {
  return <div className=' leading-relaxed p-4'>{children}</div>
}
function Footer({ children }) {
  // return <div className='bg-slate-50 p-4'>{children}</div>
  return <div className=' p-4'>{children}</div>
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer
export default Card
