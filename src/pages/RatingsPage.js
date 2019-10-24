import React, { useState, useEffect, useContext } from 'react'
import { deleteRating, editRating, postRating } from '../services'
import EditRatingForm from '../EditRatingForm'
import Delete from '../static/delete.png'
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

function RatingsPage({ rating }) {
  const [cm, setCommand] = useState(null)
  const [isModalShow, setIsModalShow] = useState(false)
  const [updated, setUpdated] = useState(true)

  function handleDelete(id) {
    return deleteRating(id)
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
      const data = postRating(input)
      if (data.result == 'SUCCESS') {
        result = true
      } else {
        result = false
      }
    } else {
      const data = editRating(id, input)
      if (data.result == 'SUCCESS') {
        result = true
      } else {
        result = false
      }
      setUpdated(true)
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
                  <td>
                    <Button onClick={() => handleEdit(cm)}>E</Button>
                    <Button onClick={() => handleDelete(cm._id)}>X</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        <Row style={{ justifyContent: 'center' }}>
          <Button onClick={() => handleCreate()}>Add</Button>
        </Row>

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
