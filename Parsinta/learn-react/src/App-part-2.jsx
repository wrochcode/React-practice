import Button from './components/button.jsx'
import Card from './components/Card.jsx'

function App() {
  const type = 'submit'
  const onClick = () => console.info(`Hallo`)
  return (
    <div className={'bg-slate-100 antialiased flex tracking-tight items-center justify-center min-h-screen'}>
      <div className='max-w-2xl flex items-center gap-4 w-full'>
        <Card>
          <Card.Title>Hello World</Card.Title>
          <Card.Body>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Card.Body>
          <Card.Footer>
            <Button>Registered</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Title>Hello World</Card.Title>
          <Card.Body>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Card.Body>
          <Card.Footer>
            <Button>Registered</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default App
