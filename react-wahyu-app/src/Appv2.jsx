import Button from './components/Button'
import Card from './components/Card'
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

export default App
