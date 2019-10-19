import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
// import SettingsPage from './SettingsPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RatingsPage from './pages/RatingsPage'

import { getCards, postCard, patchCard } from './services'
import backgroundBlue from './assets/blue-background.jpg'
import Footer from './Footer'
import Header from './Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  // function createCard(cardData) {
  //   postCard(cardData).then(card => {
  //     setCards([...cards, card])
  //   })
  // }

  return (
    <Router>
      <Header />
      <QuizStyled>
        <QuizHeadStyled>Einstein Quiz</QuizHeadStyled>
        <QuizContentStyled>
          <Route exact path="/" render={() => <HomePage cards={cards} />} />
          {/* <Route
            path="/settings"
            render={() => <SettingsPage onSubmit={createCard} />}
          /> */}
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/rating" render={() => <RatingsPage />} />
        </QuizContentStyled>
      </QuizStyled>
      <Footer />
      {/* <Navigation /> */}
    </Router>
  )
}

const QuizStyled = styled.div`
  background-image: url(${backgroundBlue});
  padding-bottom: 140px;
  padding-top: 40px;
`

const QuizHeadStyled = styled.h2`
  font-size: 42px;
  color: #fff;
  text-align: center;
  font-size: 28px;
`

const QuizContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex: wrap;
  margin-top: 70px;
  flex-direction: column;
`
