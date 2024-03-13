import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Likebutton from './Likebutton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <Likebutton></Likebutton>
    </>
  )
}

export default App
