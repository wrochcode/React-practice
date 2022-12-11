import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandTwitter,
} from '@tabler/icons'
import clsx from 'clsx'

export default function App() {
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
          }}
        >
          <IconBrandTwitter />
          Login
        </Button>
        <Button
          className={'bg-red-600'}
          onClick={() => console.info(`Hallo`)}
          type='reset'
        >
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

function Button(props) {
  const {
    text,
    children,
    className = 'bg-black',
    type = 'submit',
  } = props
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        ` [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center bg-blue-300 text-white px-4 py-2 gap-x-2 rounded`
      )}
    >
      {text || children}
    </button>
  )
}
