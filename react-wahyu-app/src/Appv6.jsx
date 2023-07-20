import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import Label from './components/Label'
import PlaceContentCenter from './components/PlaceContentCenter'

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  })

  function onChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign Up</Card.Title>

        <Card.Body>
          <div className='mb-5 border rounded p-4'>
            <p>Name: {form.name || '-'}</p>
            <p>Email: {form.email || '-'}</p>
          </div>
          <div className='mb-6'>
            <Label htmlFor='name' value={'Name'} />
            <Input
              value={form.name}
              onChange={(e) =>
                setForm((form) => ({
                  ...form,
                  name: e.target.value,
                }))
              }
              id={'name'}
              name={'name'}></Input>
          </div>
          <div className='mb-6'>
            <Label htmlFor='email' value={'Email'} />
            <Input value={form.email} onChange={onChange} id={'email'} name={'email'}></Input>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className='grid place-content-center'>
            <div className='flex items-center gap-2'>
              <Button className='bg-red-600'>
                <IconBrandGoogle />
                Google
              </Button>
              <Button className='bg-blue-600'>
                <IconBrandFacebook />
                Facebook
              </Button>
              <Button className='bg-black'>
                <IconBrandGithub />
                Git Hub
              </Button>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  )
}

export default App
