import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function HomePage({ cards }) {
  return (
    <PageStyled>
      {/* <h1>Homepage</h1> */}
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
        />
      ))}
    </PageStyled>
  )
}

const PageStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`
