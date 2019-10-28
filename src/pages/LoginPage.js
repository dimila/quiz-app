import React, { useRef, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Input, Button, LoginForm, LoginLabel } from '../Global'
import { login } from '../services'

function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const emailRef = useRef()
  const passwRef = useRef()

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('token'))
  }, [])

  const handleOnClick = () => {
    const email = emailRef.current.value
    const password = passwRef.current.value

    setLoading(true)
    const { token, err } = login({ email, password })

    setLoading(false)

    if (err) {
      setError({ message: err })
    } else {
      localStorage.setItem('token', token)
      setIsLoggedIn(true)
    }
  }

  return isLoggedIn ? (
    <Redirect to="/profile"></Redirect>
  ) : (
    <LoginForm>
      <Row>
        <h1>Login Form</h1>
      </Row>

      <Row small>
        <LoginLabel>
          <Input type="text" placeholder="Login" ref={emailRef} />
        </LoginLabel>
      </Row>

      <Row small>
        <LoginLabel>
          <Input type="text" placeholder="Password" ref={passwRef} />
        </LoginLabel>
      </Row>

      <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Button onClick={handleOnClick}>Login</Button>
      </Row>
    </LoginForm>
  )
}

export default LoginPage
