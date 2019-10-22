import React, { useState, useEffect, useContext } from 'react'
import { deleteRating, editRating } from '../services'
import EditRatingForm from '../EditRatingForm'
import {
  Section,
  Container,
  Title,
  Button,
  TableWrapper,
  Table,
  Th
} from '../Global'

function handleDelete(id) {
  console.log('Id  ' + id)
  return deleteRating(id)
}

function RatingsPage({ rating }) {
  const [cm, setCommand] = useState(null)
  const [isModalShow, setIsModalShow] = useState(false)
  const [updated, setUpdated] = useState(true)

  const handleEdit = cm => {
    setCommand(cm)
    setIsModalShow(true)
  }

  const handleSave = async (id, input) => {
    let result

    // if (!cm) {
    //   const data = await api.createCommand(input)
    //   if (data.result == "SUCCESS") {
    //     result = true
    //   } else {
    //     result = false
    //   }
    // } else {
    const data = await editRating(id, input)
    if (data.result == 'SUCCESS') {
      console.log('Data' + data)
      result = true
    } else {
      result = false
    }
    setUpdated(true)
    return result
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
              <Th>Team name</Th>
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
                    <Button onClick={() => handleEdit(cm)}>Edit</Button>
                    <Button onClick={() => handleDelete(cm._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

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
