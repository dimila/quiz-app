import React, { useState } from 'react'
import styled from 'styled-components'
import { postUser } from './services'

import {
  Input,
  Button,
  Range,
  Label,
  Checkbox,
  Row,
  Icon,
  Clock,
  Address,
  Price
} from './Global'

function RegistrationForm({ quiz, onClose, onRegister }) {
  const [count, setCount] = useState(2)
  console.log('TEST', typeof onSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    if (data['need_team'] === 'on') {
      data.need_team = true
    }
    postUser(data)
  }

  return (
    <RegistrationFormWrapper>
      <RegistrationFormPanel onSubmit={handleSubmit}>
        <Title>Registration Form</Title>

        <Row small>
          <Input name="name" type="text" placeholder="Name (*)" />
        </Row>
        <Row small>
          <Input name="telephone" type="phone" placeholder="Telephone (*)" />
        </Row>
        <Row small>
          <Input name="email" type="email" placeholder="Email" />
        </Row>
        <Row small>
          <Input name="team_name" type="text" placeholder="Team Name" />
        </Row>
        <Row center>
          <NumOfParticipants>Number of participants</NumOfParticipants>
          <Range
            name="nr_participants"
            type="range"
            min={2}
            max={10}
            step={1}
            value={count}
            defaultValue={2}
            onChange={e => setCount(e.target.value)}
          />
          <CountOfParticipants>{count}</CountOfParticipants>
        </Row>
        <Row>
          <Label>
            <Checkbox name="need_team" type="checkbox" />I need a team
          </Label>
        </Row>
        <Row center>
          <Button>Register</Button>
        </Row>
        <CloseButton onClick={onClose}>x</CloseButton>
      </RegistrationFormPanel>
    </RegistrationFormWrapper>
  )
}

const RegistrationFormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

const RegistrationFormPanel = styled.form`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  min-width: 350px;
  max-width: 370px;
  position: relative;
`

const Span = styled.span``

const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  font-size: 25px;
`

const NumOfParticipants = styled.span`
  line-height: 0.9;
  font-size: 14px;
`

const CountOfParticipants = styled.span`
  margin-left: 10px;
`

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 150, 82, 1);
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  color: rgba(255, 150, 82, 1);
`

export default RegistrationForm
