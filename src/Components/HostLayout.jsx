import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import './HostLayout.css'

export default function HostLayout() {
  return (
    <div className='host--layout container'>

      <nav className="host-nav">
        <Link to='.' className='ff-sans-cond uppercase text-white letter-spacing-2'>Dashboard</Link>
        <Link to='income' className='ff-sans-cond uppercase text-white letter-spacing-2'>Income</Link>
        <Link to='vans' className='ff-sans-cond uppercase text-white letter-spacing-2'>Listed Destinations</Link>
        <Link to='reviews' className='ff-sans-cond uppercase text-white letter-spacing-2'>Reviews</Link>
      </nav>

      <Outlet />
    </div>
  )
}
