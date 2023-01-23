// function Card({ title, children, footer }) {
function Card({ children }) {
  return <div className={' p-4 overflow-hidden rounded shadow bg-slate-500 mb-6'}>{children}</div>
}

function Title({ children }) {
  return <h1 className={'text-2xl font-bold text-center underline'}>{children}</h1>
}

function Body({ children }) {
  return (<div className={' text-lg  font-light mt-3'}>{children}</div>)
}

function Footer({ children }) {
  return <div className={'mt-5 mb-4'}>{children}</div>
}

//assigment
Card.Title = Title
Card.Body = Body
Card.Footer = Footer

export default Card
