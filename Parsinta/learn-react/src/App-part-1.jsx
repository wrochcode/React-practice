import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandTwitter } from '@tabler/icons'
import clsx from 'clsx'
import Button from './components/Button'

function App() {
  const type = 'submit'
  const onClick = () => console.info(`Hallo`)
  return (
    <div className='bg-slate-900 grid place-content-center min-h-screen'>
      <div className='flex gap-x-2'>
        <Button className='bg-green-700' text='Sign Up' />

        <Button
          {...{
            className: 'bg-blue-600',
            onClick: () => console.info(`Hallo`),
            type: 'submit',
          }}>
          <IconBrandTwitter />
          Login
        </Button>
        <Button className={'bg-red-600'} onClick={() => console.info(`Hallo`)} type='reset'>
          <IconBrandGoogle />
          Login
        </Button>
        <Button className={'bg-blue-900 '} type='submit'>
          <IconBrandFacebook />
          Login
        </Button>
        <Button type='submit'>
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  )
}

const Title = () => {
  ;<>
    <h1>Hallo</h1>
    <h1>wahyu</h1>
  </>
}

export default App
