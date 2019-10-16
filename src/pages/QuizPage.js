import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Button, Row } from '../components/Global'

const QuizInfo = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 15px;
`

const QuizHeader = styled.h1`
  color: #ff5052;
`

const QuizCity = styled.span`
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 2rem;
`

const QuizFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`

const QuizLocation = styled.div``

export default () => {
  return (
    <>
      <Header />
      <QuizInfo>
        {/* <QuizHeader>{data.quiz.title}</QuizHeader> */}
        <QuizHeader>Quiz #23</QuizHeader>

        {/* <QuizCity>{data.quiz.city}</QuizCity> */}
        <QuizCity>Hamburg</QuizCity>

        <Row small>
          {/* <QuizLocation><strong>Location:</strong> {data.quiz.location}</QuizLocation> */}
          <QuizLocation>
            <strong>Location:</strong> Fühlsbüttler Str. 405
          </QuizLocation>
        </Row>

        <Row small>
          {/* <QuizLocation><strong>Game type:</strong> {data.quiz.gameType}</QuizLocation> */}
          <QuizLocation>
            <strong>Game type:</strong> Movies und Music
          </QuizLocation>
        </Row>

        <Row small>
          {/* {data.quiz.fullDescription && <div>{data.quiz.fullDescription}</div>} */}
          Its all about a Bass
        </Row>

        <QuizFooter>
          <Button>Register</Button>
        </QuizFooter>
      </QuizInfo>

      <Footer />
    </>
  )
}
