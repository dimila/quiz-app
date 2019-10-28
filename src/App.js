import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import styled from 'styled-components/macro'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RatingsPage from './pages/RatingsPage'
import { getCards, getRating } from './services'
import backgroundBlue from './assets/blue-background.jpg'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  const [cards, setCards] = useState([])
  const [rating, setRating] = useState([])


  useEffect(() => {
    getCards().then(setCards)
  }, [])

  useEffect(() => {
    getRating().then(setRating)
  }, [])

  return (
   <Router>
      <Header />
      <QuizStyled>
        <QuizContentStyled>
          <Route
            exact
            path="/"
            render={() => <HomePage setCards={setCards} cards={cards} />}
          />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route
            path="/rating"
            render={() => <RatingsPage setRating={setRating} rating={rating} />}
          />
        </QuizContentStyled>
      </QuizStyled>
      <Footer />
   </Router>
  )
}

const QuizStyled = styled.div`
  background-image: url(${backgroundBlue});
  padding-bottom: 40px;
  padding-top: 10px;
`

const QuizContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex: wrap;
  margin-top: 20px;
  flex-direction: column;
`
