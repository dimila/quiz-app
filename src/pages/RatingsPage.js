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

function RatingsPage() {
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
              {/* <tr key={cm._id}>
                  <td>{cm.name}</td>
                  <td>{cm.city}</td>
                  <td>{cm.score}</td> */}
              {/* </tr> */}
              <tr>
                <td>LolMan</td>
                <td>Hamburg</td>
                <td>123</td>
              </tr>
              <tr>
                <td>WomanPower</td>
                <td>Hamburg</td>
                <td>79</td>
              </tr>
              <tr>
                <td>Woodoo</td>
                <td>Berlin</td>
                <td>68</td>
              </tr>
            </tbody>
          </Table>
        </TableWrapper>
      </Container>
    </Section>
  )
}

export default RatingsPage
