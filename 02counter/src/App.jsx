import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter] = useState(15)
  //let counter = 5
  const addValue = ()=>{
    console.log(counter);
    //counter =  counter + 1
    setCounter(counter+1)
  }

  const decreasevalue = ()=>{
    if (counter>0){
      setCounter(counter-1)
    }
    else{
      alert('counter cant be negative')
    }
    
  }

  return (
    <>
    <h1>counter value : {counter}</h1>
    <button onClick={addValue}>add value</button>
    <br/>
    <button onClick={decreasevalue}>decrease value</button>
    </>
  )
}

export default App
