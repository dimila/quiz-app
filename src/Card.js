import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'

import {
  Row,
  Clock,
  Address,
  Price,
  Icon,
  Button,
  Geo,
  Restaurant,
  Pfeil
} from './Global'

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.PropTypes.instanceOf(Date),
  city: PropTypes.string,
  time: PropTypes.string,
  adress: PropTypes.string,
  price: PropTypes.string
}

Card.defaultProps = {
  title: '(No title)'
}

export default function Card({
  img,
  title,
  date,
  city,
  time,
  adress,
  price,
  place
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  const [isShow, setIsShow] = useState(false)
  

  return (
  

    <QuizBlock onClick={toggleAnswer}>
      {isShow && <RegisterForm quiz={[date, city, price]} onClose={() => setIsShow(false)} />} 
      <QuizImg src={img} alt="spielimage" />
      <QuizDescription>
        <Row small>
          <QuizData>
            {new Date(date).toLocaleDateString('de-DE', {
              weekday: 'long',
              year: '2-digit',
              month: '2-digit',
              day: '2-digit'
            })}
          </QuizData>
        </Row>

        <QuizHead>{title}</QuizHead>

        <Row small>
          <Icon>
            <Address />
          </Icon>
          <QuizAdress>{city}</QuizAdress>
        </Row>

        {/* <Icon> */}
        {/* <Pfeil /> */}
        {/* </Icon> */}

        {isAnswerVisible && <Answer text={adress} />}
      </QuizDescription>
    </QuizBlock>
  )

  function Answer({ text }) {
    return (
      <>
        <hr />

        <Row small>
          <Icon>
            <Clock />
          </Icon>
          <QuizData>{time}</QuizData>
        </Row>

        <Row small>
          <Icon>
            <Address />
          </Icon>
          <QuizAdress>{adress}</QuizAdress>
        </Row>

        <Row small>
          <Icon>
            <Price />
          </Icon>
          <QuizAdress>{price}</QuizAdress>
        </Row>

        <QuizFooter>
          <Button onClick={() => setIsShow(true)}>Register</Button>
        </QuizFooter>
      </>
    )
  }

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }
}

const QuizFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`

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
  font-size: 25px;
`

const QuizDescription = styled.div`
  padding: 15px;

  &:nth-child(1) {
    border-bottom: 1px solid #ccc;
  }
`

const QuizData = styled.span`
  font-size: 30px;
`

const QuizAdress = styled.p`
  text-align: left;
  padding: 0;
  margin: 0;
  font-size: 20px;
`
