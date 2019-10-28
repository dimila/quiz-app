import React, { useState } from 'react'
import { Button, Section, Container } from '../Global'
import { Redirect } from 'react-router-dom'

function ProfilePage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleOnClick = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(true)
  }

  return isLoggedIn ? (
    <Redirect to="/login"></Redirect>
  ) : (
    <Section>
      <Container>
        <div>Welcome!</div>
        <Button onClick={handleOnClick}>Exit</Button>
      </Container>
    </Section>
  )
}

export default ProfilePage
