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

function EditQuizForm({ quiz, onSave, onClose }) {
  const [saved, setSaved] = useState(false)

  const titleRef = useRef()
  const cityRef = useRef()
  const imgRef = useRef()
  const dateRef = useRef()
  const timeRef = useRef()
  const locationRef = useRef()
  const priceRef = useRef()
  const adressRef = useRef()

  const handleSave = () => {
    const input = {
      title: titleRef.current.value,
      location: locationRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      city: cityRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      adress: adressRef.current.value
    }

    let id = quiz ? quiz._id : null
    const result = onSave(id, input)

    if (result) {
      setSaved(true)
    }
  }

  return (
    <Modal>
      <ModalWrapper>
        <ModalTitle>{quiz._id ? 'Edit quiz' : 'Add quiz'}</ModalTitle>

        <Row small>
          <Input
            type="text"
            placeholder="Quiz title"
            ref={titleRef}
            defaultValue={quiz ? quiz.title : ''}
          />
        </Row>

        <Row small>
          <Input
            type="text"
            placeholder="City"
            ref={cityRef}
            defaultValue={quiz ? quiz.city : ''}
          />
        </Row>

        <Row small>
          <Input
            type="text"
            placeholder="Photo"
            ref={imgRef}
            defaultValue={quiz ? quiz.img : ''}
          />
        </Row>

        <Row small>
          <Input
            type="date"
            placeholder="Date"
            ref={dateRef}
            defaultValue={quiz ? quiz.date : ''}
          />

          <Input
            type="time"
            placeholder="Time"
            ref={timeRef}
            defaultValue={quiz ? quiz.time : ''}
          />
        </Row>

        <Row small>
          <Input
            type="text"
            placeholder="Location"
            ref={locationRef}
            defaultValue={quiz ? quiz.location : ''}
          />
        </Row>

        <Row small>
          <Input
            type="text"
            placeholder="Adress"
            ref={adressRef}
            defaultValue={quiz ? quiz.adress : ''}
          />
        </Row>

        <Row small>
          <Input
            type="number"
            // min={0}
            placeholder="Price"
            ref={priceRef}
            defaultValue={quiz ? quiz.price : ''}
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

export default EditQuizForm
