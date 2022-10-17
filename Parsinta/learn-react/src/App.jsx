import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons'
import clsx from 'clsx'
import { Fragment } from 'react'

function App () {
  const type = 'submit'
  const onClick = () => console.log('login with another style..')
  return (
    <div className='bg-slate-900 grid place-content-center min-h-screen'>
      <div className='flex gap-x-2'>
        <Button {...{ type, onClick }}>
          <IconBrandFacebook />
          Login
        </Button>
        <Button className='bg-pink-500' type='reset'>
          <IconBrandTwitter />
          Login
        </Button>
        <Button className='bg-black' type='button'>
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  )
}

const Button = (props) =>{
  const { className = 'bg-blue-600', children, text, type = 'submit' } = props
  return (
    <button {...props} type={type} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-2 text-white px-4 py-2 rounded')}>
      {text || children}
    </button>
  )
}

export default App
