import React from 'react'
import "./login.scss"
import { Link } from "react-router-dom"


export const Login = () => {
  return (
    <div className='login'>
        <div className="containerLogin">
            <div className="wrapLogin">
                <form action="" className="loginForm">
                  <span className="loginFormTitle">Welcome to Excalibur</span>
                  <span className="loginFormTitle">
                    <img src="https://cdn-icons-png.flaticon.com/512/302/302134.png" alt="" />
                  </span>

                  <div className="wrapInput">
                    <input className='input' placeholder='Email' type="email" />
                  </div>

                  <div className="wrapInput">
                    <input className='input' placeholder='Password' type="password" />
                  </div>

                  <div className="containerBtn">
                    < Link to="/" style={{textDecoration:"none"}}>
                      <button className="loginBtn">
                        Login
                      </button>
                    </Link>
                  </div>

                  <div className="cont">
                    <span className="txt1">
                      Don't have an account?
                    </span>
                    <a href="https://www.linkedin.com/in/heber-junior-8399991a5/" className="txt2">Get in touch</a>
                  </div>

                </form>
            </div>
        </div>
    </div>
  )
}
 export default Login