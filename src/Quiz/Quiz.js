import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import QuizBlock from './QuizBlock'
import backgroundBlue from '../assets/blue-background.jpg'

export default () => (
  <QuizStyled>
    <Container>
      <QuizHeadStyled>Einstein Quiz</QuizHeadStyled>
      <QuizContentStyled>
        <QuizBlock />
        <QuizBlock />
        <QuizBlock />
      </QuizContentStyled>
    </Container>
  </QuizStyled>
)

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
