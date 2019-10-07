import React from 'react'
import styled from 'styled-components/macro'
import Spiel from './assets/Spiel.jpg'

const QuizBlock = styled.div`
  max-width: 370px;
  background-color: #fff;
  text-align: center;
  padding-bottom: 30px;
  @media (max-width: 640px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`
const QuizImg = styled.img`
  max-width: 100%;
`
const QuizHead = styled.h3`
  font-size: 24px;
  margin-top: 40px;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`

const QuizDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
  padding: 0 15px;
`

const QuizData = styled.span`
  font-size: 15px;
`

const QuizAdress = styled.p`
  font-size: 15px;
  margin-left: 5px;
`

export default () => (
  <QuizBlock>
    <QuizImg src={Spiel} alt="Spiel" />
    <QuizHead>Quiz 25 - HAMBURG</QuizHead>
    <QuizDescription>
      <QuizData>15. Okt., 19:00 – 21:30</QuizData>
      <QuizAdress>Hard Rock Cafe Hamburg</QuizAdress>
    </QuizDescription>
  </QuizBlock>
)
