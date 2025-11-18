import React from 'react'
import {Outlet} from 'react-router-dom'
import header from './components/header/header'
import footer from './components/footer/footer'

function layout() {
  return (
    <>
    <header/>
    <Outlet/>
    <footer/>
    </>
  )
}

export default layout