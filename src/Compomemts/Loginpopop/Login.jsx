import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({ SetLogin }) => {
    const [currState, setCurr] = useState("Login")

    const handleSubmit = (event) => {
        event.preventDefault()
        // Add your form submission logic here
    }

    return (
        <div className='Login-Popop'>
            <form className='Login-container' onSubmit={handleSubmit}>
                <div className="logi-title">
                    <h2>{currState}</h2>
                    <img onClick={() => SetLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="logininput">
                    {currState === 'Login' ? <></> : <input  type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState === 'Sign up' ? 'Create account' : 'Login'}</button>
                <div className="logi-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurr("Sign up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurr("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login
