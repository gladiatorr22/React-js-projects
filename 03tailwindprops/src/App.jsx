import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]
  return(
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-2xl '>tailwind css</h1>
      <Card username="likith" btnText="click me" />
      <Card username="raj" />
    </>
    
  )
  
}

export default App
