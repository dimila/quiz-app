import React from 'react'
import styled from 'styled-components/macro'
import spielimage from '../assets/Spiel.jpg'
import { Row, Clock, Address, Price, Icon, Button } from '../Global'
import { Link } from 'react-router-dom'

const QuizBlock = styled.div`
  text-decoration: none;
  background-color: #fff;
  padding-bottom: 30px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 10px;
`
const QuizImg = styled.img`
  max-width: 100%;
`
const QuizHead = styled.h3`
  text-decoration: none;
  font-size: 24px;
  margin: 0;
  font-size: 18px;
`

const QuizDescription = styled.div`
  padding: 15px;

  &:nth-child(1) {
    border-bottom: 1px solid #ccc;
  }
`

const QuizData = styled.span`
  font-size: 15px;
`

const QuizAdress = styled.p`
  text-align: left;
  padding: 0;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 10px;
  display: flex;

  width: calc((100% - 60px) / 3);

  @media (max-width: 796px) {
    width: calc((100% - 40px) / 2);
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`

export default ({ quiz }) => {
  return (
    // <StyledLink to={`/quiz/${quiz._id}`}>
    <QuizBlock>
      <QuizImg src={spielimage} alt="spielimage" />

      <QuizDescription>
        <Row small>
          {/* <QuizData>{new Date(quiz.date).toLocaleDateString()}</QuizData> */}
          <QuizData>28.10.2019</QuizData>
        </Row>

        <Row small>
          {/* <QuizHead>{quiz.title}</QuizHead> */}
          <QuizHead>Music and Movies</QuizHead>
        </Row>

        <Row small>
          <Icon>
            <Address />
          </Icon>
          {/* <QuizAdress>{quiz.city}</QuizAdress> */}
          <QuizAdress>Hamburg</QuizAdress>
        </Row>
      </QuizDescription>

      <QuizDescription>
        <Row small>
          <Icon>
            <Clock />
          </Icon>
          {/* <QuizData>{getTime(quiz.date)}</QuizData> */}
          <QuizData>17:00</QuizData>
        </Row>

        <Row small>
          <Icon>
            <Address />
          </Icon>
          {/* <QuizAdress>{quiz.location}</QuizAdress> */}
          <QuizAdress>Fühlsbüttler Str. 415</QuizAdress>
        </Row>

        <Row small>
          <Icon>
            <Price />
          </Icon>
          {/* <QuizAdress>{convertCurrency(quiz.currency, quiz.cost)}</QuizAdress> */}
          <QuizAdress>7 €uro</QuizAdress>
        </Row>

        <Row>
          <Button>Details</Button>
        </Row>
      </QuizDescription>
    </QuizBlock>
    // </StyledLink>
  )
}
