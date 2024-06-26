import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { motion } from 'framer-motion'


export default function Home() {
  return (

    <div className='home--container'>
      <main className="grid-container grid-container--home center width">
        <motion.div
        initial={{y: "-4rem" , opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          duration: 3,
          type:"spring"
        }}
        >
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">Travel to
            <span className="d-block fs-900 ff-serif text-white home--title">Space</span></h1>

          <p>Let’s face it; if you want to go to space, you might as well genuinely go for
            space walks ,trips to moon, mars and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience! </p>
        </motion.div>
        <motion.div
           initial={{y: "4rem" , opacity: 0}}
           animate={{y: 0, opacity: 1}}
           transition={{
             duration: 3,
             type:"spring"
           }}
        >
          <Link to='/vans' className="large-button uppercase ff-serif text-dark bg-white">Explore</Link>
        </motion.div>
      </main>
    </div>
  )
}
