import React from 'react'
import { Link } from 'react-router-dom'
import "../NotAvailable/NotAvailable.css"

export default function NotAvailable() {
  return (
    <div className='container'>

      <div className="NotAvailable--container">

        <div className='bg--wrapper large-buttons uppercase ff-serif text-dark bg-white'>
          <div className="wrapper">
            <span className="number ff-sans-cond uppercase text-white letter-spacing-2">4</span>
            <img className='img--404' src="/src/assets/404.png" alt="" />
            <span className="number ff-sans-cond uppercase text-white letter-spacing-2">4</span>
          </div>
        </div>


      </div>

      <Link className='link-buttons ff-sans-cond uppercase text-white letter-spacing-2' to='/'>return Home</Link>
    </div>
  )
}
