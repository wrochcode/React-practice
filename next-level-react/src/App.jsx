import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import PlaceContentCenter from './components/PlaceContentCenter'

function App(props) {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      setLoading(true)

      // lama:
      // const response = await fetch('https://jsonplaceholder.typicode.com/users')
      // const data = await response.json()

      //no maximum:
      // const {data} = await axios ('https://jsonplaceholder.typicode.com/users')
      // setUsers (data)
      // console.log(data)

      // maximum:
      try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        // const { data } = await axios('https://jsonplaceholder.typicode.com/users/${userid}')jika ada parameter masukkan pada dep
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.log('Something went wrong.')
        setLoading(false)
      }
    }
    getUsers().then((r) => r)
  }, [])//masukkin disini jika ada parameter

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Users ({users.length})</Card.Title>
        <Card.Body>
          {loading ? (
            <div>Loading...</div>
          ) : users.length ? (
            <ol type='1'>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} {'=== >'}{user.username},
                </li>
              ))}
            </ol>
          ) : (
            <div>There are no users.</div>
          )}
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  )
}
export default App
