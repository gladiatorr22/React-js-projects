import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


const anotherelement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const anotheruser = 'likith'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' ,target:'_blank'},
  'click me for google',
  anotheruser
)

function MyApp(){
  const username = 'likith'
  return(
    <div>
      <h1>username = {username}</h1> 
    </div>
    
  )
}


createRoot(document.getElementById('root')).render(
    reactElement
)
