import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {

  const [Mobile, setMobile] = React.useState(false)

  return (
    <nav className='primary-header flex'>
      <div>
        <Link to='/'><img src="./src/assets/logo.svg" alt="" className="logo" /></Link>

      </div>

      <div  onClick={() => setMobile(false)} data-visible="false"
      className={`primary-navigation underline-indicators flex ${Mobile ? "primary-navigation" : "mobile-nav-toggle"}`
        }>
        <NavLink to='/' className=' ff-sans-cond uppercase text-white letter-spacing-2'>Home</NavLink>
        <NavLink to='/vans' className='ff-sans-cond uppercase text-white letter-spacing-2'>Destinations</NavLink>
        <NavLink to='/host' className='ff-sans-cond uppercase text-white letter-spacing-2'>Dashboard</NavLink>
        {/* <NavLink to='/news' className='ff-sans-cond uppercase text-white letter-spacing-2'>News</NavLink> */}
        <NavLink to='/Pictures' className='ff-sans-cond uppercase text-white letter-spacing-2'>Images </NavLink>
        <NavLink to='/login' className='ff-sans-cond uppercase text-white letter-spacing-2'>Login</NavLink>
      </div>
      <button className="mobile-menue-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile ?  <img className='icon-close' src='/src/assets/icon-close.svg' /> : <img src='/src/assets/icon-hamburger.svg' /> }

            </button>
    </nav>
  )
}
