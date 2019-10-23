import React, { useState } from 'react'
import Card from '../Card'
import styled from 'styled-components/macro'
import { deleteCard } from '../services'

export default function HomePage({ cards }) {
  const [updated, setUpdated] = useState(true)

  function handleDelete(card) {
    setUpdated(true)
    return deleteCard(card._id)
  }

  return (
    <PageStyled>
      <QuizHead>Einstein Quizes</QuizHead>
      {cards.map(card => (
        <Card
          key={card._id}
          date={card.date}
          img={card.img}
          city={card.city}
          time={card.time}
          adress={card.adress}
          price={card.price}
          title={card.title}
          onDelete={() => handleDelete(card)}
        />
      ))}
    </PageStyled>
  )
}

const QuizHead = styled.h2`
  font-size: 42px;
  color: #fff;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 28px;
  }
`

const PageStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`
