import { IconBrandTwitterFilled } from '@tabler/icons-react'

export default function App() {
  return (
    <div className=' bg-slate-900  grid place-content-center min-h-screen'>
      <h1 className='text-xl font-normal'>learn react</h1>
      <div className='flex gap-x-2'>
        <Button text='Register'>Sign In</Button>
        <Button
          text={
            <>
              <IconBrandTwitterFilled />
              twitter
            </>
          }
        />
        {/* <Button>Sign Up</Button> */}
      </div>
    </div>
  )
}

function Button(props) {
  return (
    <button className=' bg-blue-600 text-white px-4 py-2 rounded'>
      {/* Hiiilllooo */}
      {props.text}
    </button>
  )
}
