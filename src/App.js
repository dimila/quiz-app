import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import QuizBlock from './QuizBlock'
// import backgroundBlue from './assets/blue-background.jpg'

const QuizStyled = styled.div`
  /* background-image: backgroundBlue; */
  background: linear-gradient(
    to bottom,
    rgba(109, 179, 242, 1) 0%,
    rgba(84, 163, 238, 1) 31%,
    rgba(54, 144, 240, 1) 68%,
    rgba(30, 105, 222, 1) 100%
  );
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

export default () => (
  <QuizStyled>
    <Container>
      <QuizHeadStyled>Next Quiz Events</QuizHeadStyled>
      <QuizContentStyled>
        <QuizBlock />
        <QuizBlock />
        <QuizBlock />
      </QuizContentStyled>
    </Container>
  </QuizStyled>
)
