import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile.jsx'
import Layout from './components/layout.jsx'
import UserContextProvider from './context/userContextProvider.jsx'
function App() {

  return (
    <UserContextProvider>
      <Layout/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
