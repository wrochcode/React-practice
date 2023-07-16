import { IconBrandFacebook, IconBrandGmail, IconBrandTwitter } from '@tabler/icons-react'
import clsx from 'clsx'
// import Button from './components/Button'
// import Card from './components/Card'

//function utama
// export default function App() {
function Apps() {
  const type = 'submit'
  const onClick = () => console.log('Gmail')
  return (
    <div className=' bg-slate-900 grid place-content-center min-h-screen'>
      <h1 className='text-xl font-normal text-white pb-2'>learn react</h1>
      {/* <Card>
        Ut ex excepteur ea nisi ipsum veniam magna exercitation sunt Lorem. Fugiat irure elit qui commodo mollit fugiat. Aute id ut in ut dolore in culpa minim.
        Quis non ad enim ex quis mollit minim ullamco excepteur anim nostrud aute. Aliqua ipsum culpa ullamco eu cillum laborum ea ex consectetur enim minim.
        Anim ipsum velit Lorem veniam excepteur laboris qui.
      </Card> */}
      <div className='flex gap-x-2'>
        <Button text='Register' />
        <Button
          className=' bg-yellow-800 '
          {...{ type, onClick }}
          // {...{ type: 'submit', onClick: () => console.log('Gmail') }}
        >
          <IconBrandGmail />
          Gmail
        </Button>

        <Button className=' bg-blue-800 ' type='button' onClick={() => console.log('Twitter')}>
          <IconBrandTwitter />
          Twitter
        </Button>
        <Button className=' bg-pink-800 ' type='submit' onClick={() => console.log('Facebook')}>
          <IconBrandFacebook />
          Facebook
        </Button>
        <Button
          text={
            <>
              <IconBrandTwitter />
              twitter
            </>
          }
        />
      {/* * <Button>Sign Up</Button> */}
      </div>
    </div>
  )
}

// // const Button = (props) =>{
function Button(props) {
  const { className = ' bg-green-600 ', children, text, type = 'submit' } = props
  return (
    <button
      // type={props.type}
      {...props}
      type={type}
      className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1  flex items-center gap-x-2text-white px-4 py-2 rounded')}>
      {/* Hiiilllooo */}
      {text || children}
    </button>
  )
}

// const Bungkus = () => (
//   <>
//     <h1>Hello world</h1>
//     <h2>Hello kamu</h2>
//   </>
// )

export default Apps
