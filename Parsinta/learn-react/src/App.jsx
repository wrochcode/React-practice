import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons'
import clsx from 'clsx'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const type = 'submit'
  const onClick = () => console.log('twitter was clicked with another style')
  return (
    <div className={'bg-slate-900 tracking-tight grid place-content-center min-h-screen'}>
      {/* // <div className={'bg-slate-900 flex items-center justify-center min-h-screen'}> */}
      <div className='max-w-2xl gap-4 w-full mb-11 text-white antialiased flex items-center justify-center'>
      <Card>
        <Card.Title>Lorem</Card.Title>
        <Card.Body>
          Minim aliqua enim exercitation culpa qui nostrud. Consequat proident dolore exercitation aute. Deserunt qui dolore dolore commodo commodo adipisicing
          sit tempor sunt. Et pariatur mollit veniam nulla deserunt nostrud qui. Consectetur incididunt minim laboris velit nisi consectetur officia in.
        </Card.Body>
        <Card.Footer> by: Wahyu</Card.Footer>
        
        </Card>
      <Card>
        <Card.Title>Lorem</Card.Title>
        <Card.Body>
          Minim aliqua enim exercitation culpa qui nostrud. Consequat proident dolore exercitation aute. Deserunt qui dolore dolore commodo commodo adipisicing
          sit tempor sunt. Et pariatur mollit veniam nulla deserunt nostrud qui. Consectetur incididunt minim laboris velit nisi consectetur officia in.
        </Card.Body>
        <Card.Footer> by: Wahyu</Card.Footer>
        
        </Card>
      </div>
      <div className='max-w-2xl w-full flex items-center justify-center'>
        <div className={'flex gap-x-2'}>
          <Button text='Register'></Button>
          <Button {...{ onClick, type }} className={'bg-slate-600'}>
            <>
              <IconBrandTwitter />
              Login
            </>
          </Button>
          <Button className={`bg-pink-600`} onClick={() => console.log('facebook')}>
            <>
              <IconBrandFacebook />
              Login
            </>
          </Button>
          <Button className={`bg-black`} onClick={() => console.log('black')} type='submit'>
            <>
              <IconBrandGithub />
              Login
            </>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
