import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter] = useState(15)
  //let counter = 5
  
  const addValue = ()=>{
    console.log(counter);
    //counter =  counter + 1
    // setCounter(counter+1) since they are same all of them will be sent in batch and will only be executed once although there are 3 set counter commands
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter(counter=>counter+1) //to separately update them , and not in batches , we use this method where setcounter takes a call bank func and then updates the counter
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
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
