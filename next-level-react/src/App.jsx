import { useEffect, useState } from 'react'
import Button from './components/Button'
import Inputv2 from './components/Inputv2'
import PlaceContentCenter from './components/PlaceContentCenter'
function App(props) {
  const [name, setName] = useState('')
  const [online, setOnline] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(window.scroll)

  // example1:
  //dipanggil untuk setiap render terjadi
  useEffect(() => {
    console.info('i always rendered')
    //
  })

  // example2:
  //dipanggil untuk render pertamakali
  useEffect(() => {
    console.info('first render')
    //
  }, [])

  // example3:
  //dipanggil untuk ada perubahan yang terjadi
  useEffect(() => {
    console.info(`I am now ${online ? 'online' : 'offline'}`)
    //
  }, [online])

  // example 4:
  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition)
    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  })

  function onKeydown() {}
  // example 5:
  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition)
    // window.addEventListener('keydown', function(e){
    //   console.log(e.code)
    // })
    // window.addEventListener('keydown', onKeydown)
    // return () => {
    //   window.removeEventListener('keydown', onKeydown)
    // }
  }, [])

  function updateScrollPosition() {
    const windowScrolling = window.scrollY
    console.log(`window scroll position: ${windowScrolling}`)
    setScrollPosition(windowScrolling)
  }

  // example2:
  // useEffect(() => {
  //   return () => {
  //     //
  //   }
  // })

  return (
    <PlaceContentCenter>
      <div className='h-[4000px]'>
        <Inputv2 value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={() => setOnline((online) => !online)}>setOnline</Button>
      </div>
    </PlaceContentCenter>
  )
}
export default App

// // example1:
//   useEffect(() => {
//     //
//   })

//   // example2:
//   useEffect(() => {
//     //
//   }, [])

//   // example3:
//   useEffect(() => {
//     //
//   }, [props])

//   // example2:
//   useEffect(() => {
//     return () => {
//       //
//     }
//   })
