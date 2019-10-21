import React from 'react'
import {
  Section,
  Container,
  Title,
  Button,
  Row,
  TableWrapper,
  Table,
  Th
} from '../Global'

function RatingsPage({ rating }) {

  'Hallo World'
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
              {rating.map(cm =>
                (<tr key={cm._id}>
                <td>{cm.name}</td>
                <td>{cm.city}</td>
                <td>{cm.score}</td>
              </tr>
               ))}
            </tbody>
          </Table>
        </TableWrapper>
      </Container>
    </Section>
  )
}

export default RatingsPage
