import React, { useState, useRef } from 'react'
import {
  Input,
  Button,
  Row,
  Modal,
  ModalWrapper,
  ModalCloseButton,
  ModalTitle,
  Success,
  Icon
} from './Global'

function EditRatingForm({ command, onSave, onClose }) {
  const [saved, setSaved] = useState(false)

  const nameRef = useRef()
  const cityRef = useRef()
  const scoreRef = useRef()

  const handleChange = () => {
    setSaved(false)
  }

  const handleSave = async () => {

    const input = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      score: +scoreRef.current.value
    }

    let id = command ? command._id : null
    const result = await onSave(id, input)

    if (result) {
      setSaved(true)
    }
    onClose(true)
  }

  return (
    <Modal>
      <ModalWrapper>
        <ModalTitle>{command ? 'Edit command' : 'Add command'}</ModalTitle>

        <Row small>
          <Input
            ref={nameRef}
            type="text"
            placeholder="Name"
            defaultValue={command ? command.name : ''}
            onChange={handleChange}
          />
        </Row>

        <Row small>
          <Input
            ref={cityRef}
            type="text"
            placeholder="City"
            defaultValue={command ? command.city : ''}
            onChange={handleChange}
          />
        </Row>

        <Row small>
          <Input
            ref={scoreRef}
            type="text"
            placeholder="Score"
            defaultValue={command ? command.score : ''}
            onChange={handleChange}
          />
        </Row>

        <Row center>
          <Button onClick={handleSave}>
            {saved && (
              <Icon color="#5BFF62">
                <Success />
              </Icon>
            )}{' '}
            Save
          </Button>
        </Row>

        <ModalCloseButton onClick={onClose}>x</ModalCloseButton>
      </ModalWrapper>
    </Modal>
  )
}

export default EditRatingForm
