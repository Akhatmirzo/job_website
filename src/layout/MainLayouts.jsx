import React from 'react'
import NavbarItems from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <div className='flex flex-col'>
        <NavbarItems />

        <div className='flex-grow'>
            <Outlet />
        </div>
    </div>
  )
}
