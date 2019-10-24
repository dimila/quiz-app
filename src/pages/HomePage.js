import React, { useState } from 'react'
import Card from '../Card'
import styled from 'styled-components/macro'
import { deleteCard, editCard, postCard } from '../services'
import EditQuizForm from '../EditQuizForm'

export default function HomePage({ cards, setCards }) {
  const [updated, setUpdated] = useState(true)
  const [isModalShow, setIsModalShow] = useState(false)
  const [card, setCard] = useState(null)

  const handleSave = (id, input) => {
    if (!id) {
      postCard(input).then(card => setCards([...cards, card]))

      setIsModalShow(false)
    } else {
      editCard(id, input).then(updatedCard => {
        const index = cards.findIndex(card => card._id === updatedCard._id)
        setCards([
          ...cards.slice(0, index),
          { ...card, ...updatedCard },
          ...cards.slice(index + 1)
        ])
      })

      setIsModalShow(false)
    }
  }

  const handleCloseModal = () => {
    setIsModalShow(false)
  }

  function handleDelete(card) {
    setUpdated(true)
    return deleteCard(card._id).then(updatedCard => {
      const index = cards.findIndex(card => card._id === updatedCard._id)
      setCards([...cards.slice(0, index), ...cards.slice(index + 1)])
    })
  }

  function handleEdit(card) {
    setUpdated(card)
    setIsModalShow(true)
  }

  const handleCreate = () => {
    setCard(null)
    setIsModalShow(true)
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
          location={card.location}
          onDelete={() => handleDelete(card)}
          onEdit={() => handleEdit(card)}
          onCreate={() => handleCreate(card)}
        />
      ))}

      {isModalShow && (
        <EditQuizForm
          quiz={updated}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
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
