import React, { useState, useEffect } from 'react'
import { deleteRating, editRating, postRating } from '../services'
import EditRatingForm from '../EditRatingForm'
import {
  Section,
  Container,
  Title,
  Button,
  TableWrapper,
  Table,
  Th,
  Row
} from '../Global'

function RatingsPage({ rating, setRating }) {
  const [cm, setCommand] = useState(null)
  const [isModalShow, setIsModalShow] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('token'))
  }, [])

  function handleDelete(id) {
    return deleteRating(id).then(updatedCard => {
      const index = rating.findIndex(rat => rat._id === updatedCard._id)
      setRating([...rating.slice(0, index), ...rating.slice(index + 1)])
    })
  }

  const handleEdit = cm => {
    setCommand(cm)
    setIsModalShow(true)
  }

  const handleCreate = () => {
    setCommand(null)
    setIsModalShow(true)
  }

  const handleSave = (id, input) => {
    let result

    if (!cm) {
      postRating(input).then(card => setRating([...rating, card]))
    } else {
      editRating(id, input).then(updatedCard => {
        const index = rating.findIndex(rat => rat._id === updatedCard._id)
        setRating([
          ...rating.slice(0, index),
          { ...rating, ...updatedCard },
          ...rating.slice(index + 1)
        ])
      })

      return result
    }
  }

  const handleCloseModal = () => {
    setIsModalShow(false)
  }

  return (
    <Section>
      <Container>
        <Title align="center">Command Rating</Title>

        <TableWrapper>
          <Table>
            <thead>
              <Th>Team </Th>
              <Th>City</Th>
              <Th>Score</Th>
            </thead>
            <tbody>
              {rating.map(cm => (
                <tr key={cm._id}>
                  <td>{cm.name}</td>
                  <td>{cm.city}</td>
                  <td>{cm.score}</td>
                  {isLoggedIn && (
                    <td>
                      <Button onClick={() => handleEdit(cm)}>E</Button>
                      <Button onClick={() => handleDelete(cm._id)}>X</Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        {isLoggedIn && (
          <Row style={{ justifyContent: 'center' }}>
            <Button onClick={() => handleCreate()}>Add</Button>
          </Row>
        )}

        {isModalShow && (
          <EditRatingForm
            command={cm}
            onSave={handleSave}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </Section>
  )
}

export default RatingsPage
