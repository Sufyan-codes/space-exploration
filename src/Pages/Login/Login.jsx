import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import {motion} from "framer-motion"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  return (
    
    <div className="login-container container">
        
 <motion.div
 initial={{y: "2rem" , opacity: 0}}
 animate={{y: 0, opacity: 1}}
 transition={{
   duration: 3,
   type:"spring"
 }}
 className="login--text">
 
    <form onSubmit={handleSubmit} className="login-form ff-sans-cond uppercase text-white letter-spacing-2">
    <h1 className='ff-sans-cond uppercase text-white letter-spacing-2'>Sign in to Continue</h1>
        <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
        />
        <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
        />
        <button className='ff-sans-cond uppercase text-white letter-spacing-2'>Log in</button>
    </form>
    <h2 className='ff-sans-cond  text-white letter-spacing-2'>Don`t have an account? <Link className='signup' to='/signup'>Sign up</Link></h2>
 </motion.div>

 <motion.div
 initial={{y: "-2rem" , opacity: 0}}
 animate={{y: 0, opacity: 1}}
 transition={{
   duration: 3,
   type:"spring"
 }}
 className="login--image">
    <img src="https://img.freepik.com/premium-photo/futuristic-concept-colonization-planet-mars-future-civilization-mars-with-advanced-space-technology-generative-ai_210545-1754.jpg" alt="" />
 </motion.div>
</div>
  )
}
