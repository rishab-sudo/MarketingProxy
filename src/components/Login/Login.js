import React, { useState } from 'react'
import loginImg from "../../assests/loginImg.png"
import axios from "axios"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUserEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handleUserPassword = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
  }
  const handleSubmit = (e) => {
    console.log({ email, password })
    axios.post('http://reqres.in/api/login', {
      email: email,
      password: password
    })
      .then(result => {
        console.log(result)
      })

      .catch((error) => {
        console.log(error)

      })
  }

  return (
    <div id="Login">
      <div className='Login_container' style={{ backgroundColor: "rgba(211, 211, 211, 0.134);", textAlign: "center" }}>
        <div class="row">

          <div class="col">
            <img className="login_img" src={loginImg} alt=""></img>
          </div>

          <div class="col">
            <div className='input_container'>
              <h1 className='login_heading'>Login Here !</h1>
              <div className='login_underline'></div>
              <input
                className='input_email'
                type="email"
                placeholder='Email'
                value={email}
                onChange={handleUserEmail}
              /><br />

              <input
                className='input_password'
                type=""
                placeholder='Password'
                value={password}
                onChange={handleUserPassword}
              />
              <button className='login_btn' onClick={handleSubmit}>Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login