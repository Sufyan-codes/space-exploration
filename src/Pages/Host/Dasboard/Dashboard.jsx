import React from 'react'
import {motion} from "framer-motion"

export default function Dashboard() {
  return (
    <motion.section
    initial={{y: "2rem" , opacity: 0}}
               animate={{y: 0, opacity: 1}}
               transition={{
                 duration: 3,
                 type:"spring"
               }}
    className='feature container'>
      <h1>
        Feature Coming soon
      </h1>

      <p>Tis feature will allow the users to be able to view astronomy pictures of the day</p>
    </motion.section>
  )
}
