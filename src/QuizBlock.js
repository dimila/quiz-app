import React from 'react'
import styled from 'styled-components/macro'
import spielimage from './assets/Spiel.jpg'

const QuizBlockStyled = styled.div`
  max-width: 370px;
  background-color: #fff;
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 20px;
`

const QuizImgStyled = styled.img`
  max-width: 100%;
`

const QuizHeadStyled = styled.h3`
  font-size: 24px;
  margin-top: 40px;
`

const QuizDescriptionStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
  padding: 0 15px;
`

const QuizDataStyled = styled.span`
  font-size: 15px;
`

const QuizAdressStyled = styled.p`
  font-size: 15px;
  margin-left: 5px;
`

export default function Card() {
  return (
    <QuizBlockStyled>
      <QuizImgStyled src={spielimage} alt="spielimage" />
      <QuizHeadStyled>Quiz 25 - HAMBURG</QuizHeadStyled>
      <QuizDescriptionStyled>
        <QuizDataStyled>15. Okt., 19:00 – 21:30</QuizDataStyled>
        <QuizAdressStyled>Hard Rock Cafe Hamburg</QuizAdressStyled>
      </QuizDescriptionStyled>
    </QuizBlockStyled>
  )
}
