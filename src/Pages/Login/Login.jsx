import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

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
        
 <div className="login--text">
 
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
 </div>

 <div className="login--image">
    <img src="/src/assets/mars.jpg" alt="" />
 </div>
</div>
  )
}
