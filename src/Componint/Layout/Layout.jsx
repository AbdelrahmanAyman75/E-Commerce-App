import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foter from '../Foter/Footer'
import { Outlet } from 'react-router-dom'
import Footer from '../Foter/Footer'

export default function Layout() {
  return <>
    <Navbar />
    <div className=''>
      <Outlet />
    </div>
  <Footer/>




  </>
}
