import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle } from '@tabler/icons'
import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import Label from './components/Label'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  // Default:
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // Simple:
  const [form, setFrom] = useState({
    name:'', email:''
  })
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign Up for New Account!</Card.Title>
        <Card.Body>
          <div className='mb-5 border rounded-lg p-4'>
            <p>Name: {form.name || 'Unknown'}</p>
            <p>Email: {form.email || 'Unknown'}</p>
          </div>
          <div className={'mb-6 mt-3'}>
            {/* <input type={'text'} name={'name'} id={'name'} className={' border-gray-400 shadow-sm rounded-md'}/> */}
            {/* Input name */}
            <Label htmlFor='name' value={'Name'}></Label>
            {/* e = event */}
            <Input
              id={'name'}
              name={'name'}
              value={form.name}
              onChange={(e) =>
                setFrom((form) => ({
                  ...form,
                  name: e.target.value,
                }))
              }
            />

            {/* <Input id={'name'} name={'name'} value={name} onChange={(e) => setName(e.target.value)}></Input> */}
            {/* Input email */}
            <Label htmlFor='email' value={'Email'} />
            <Input
              id={'email'}
              name={'email'}
              value={form.email}
              onChange={(e) =>
                setFrom((form) => ({
                  ...form,
                  email: e.target.value,
                }))
              }
            />
          </div>
        </Card.Body>
        <Card.Footer>
          <div className={' transition duration-400 w-full flex items-center justify-center gap-2'}>
            <Button className={' bg-black'}>
              <IconBrandGithub />
              GitHub
            </Button>
            <Button className={' bg-red-600'}>
              <IconBrandGoogle />
              Google
            </Button>
            <Button className={' bg-blue-600'}>
              <IconBrandFacebook />
              Facebook
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  )
}

export default App
