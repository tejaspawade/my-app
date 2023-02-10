import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TextForms from '../components/TextForms'
export default function Rootlayout() {
  return (
    <div className='rootlayout'>
        <header>
            <Navbar/>
            <TextForms/>
            <nav>
                <NavLink to="/"></NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
