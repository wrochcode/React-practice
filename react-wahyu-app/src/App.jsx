import Button from './components/Button'
import Card from './components/Card'

//function utama
// export default function App() {
function App() {
  return (
    // <div className=' bg-slate-100 grid place-content-center min-h-screen'>
    <div className=' bg-slate-100 text-slate-800 tracking-tight antialiased items-center flex justify-center min-h-screen'>
      <div className='max-w-2xl w-full flex items-center gap-4'>
        {/* <Card title={'Lorem'} footer={<Button>Like</Button>}> */}
        <Card>
          <Card.Title>Lorem</Card.Title>
          <Card.Body>
            Ut ex excepteur ea nisi ipsum veniam magna exercitation sunt Lorem. Fugiat irure elit qui commodo mollit fugiat. Aute id ut in ut dolore in culpa
            minim. Quis non ad enim ex quis mollit minim ullamco excepteur anim nostrud aute. Aliqua ipsum culpa ullamco eu cillum laborum ea ex consectetur
            enim minim. Anim ipsum velit Lorem veniam excepteur laboris qui.
          </Card.Body>
          <Card.Footer>
            <Button>Like</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Title>Lorem</Card.Title>
          <Card.Body>
            Ut ex excepteur ea nisi ipsum veniam magna exercitation sunt Lorem. Fugiat irure elit qui commodo mollit fugiat. Aute id ut in ut dolore in culpa
            minim. Quis non ad enim ex quis mollit minim ullamco excepteur anim nostrud aute. Aliqua ipsum culpa ullamco eu cillum laborum ea ex consectetur
            enim minim. Anim ipsum velit Lorem veniam excepteur laboris qui.
          </Card.Body>
          <Card.Footer>
            <Button>Like</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

// // const Button = (props) =>{
// function Button(props) {
//   const { className = ' bg-green-600 ', children, text, type = 'submit' } = props
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

// const Bungkus = () => (
//   <>
//     <h1>Hello world</h1>
//     <h2>Hello kamu</h2>
//   </>
// )

export default App
