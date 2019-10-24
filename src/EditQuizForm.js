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
  Icon,
  Label,
  Select,
  Textarea
} from './Global'

const GAME_TYPES = [
  'Movies & Music',
  'Harry Potter',
  "90's",
  '18+',
  'Game of Thrones',
  "2000's"
]

function EditQuizForm({ quiz, onSave, onClose }) {
  const [saved, setSaved] = useState(false)

  const titleRef = useRef()
  const cityRef = useRef()
  const imgRef = useRef()
  const dateRef = useRef()
  const timeRef = useRef()
  const locationRef = useRef()
  const priceRef = useRef()
  //   const currencyRef = useRef()
  //   const gameTypeRef = useRef()
  //   const fullDescriptionRef = useRef()

  const handleSave = async () => {
    const input = {
      title: titleRef.current.value,
      location: locationRef.current.value,
      //   gameType: gameTypeRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      city: cityRef.current.value,
      //   fullDescription: fullDescriptionRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value
      //   currency: currencyRef.current.value
    }

    let id = quiz ? quiz._id : null
    const result = await onSave(id, input)
    console.log('Quiz ' + quiz)

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
            type="date" // ?? nicht übernopmmen
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
            type="number"
            // min={0}
            placeholder="Price"
            ref={priceRef}
            defaultValue={quiz ? quiz.price : ''}
          />
          {/* <Select ref={currencyRef} defaultValue={quiz ? quiz.currency : ''}>
            <option value="EUR">Euro</option>
            <option value="USD">USD</option>
            <option value="RUB">Руб.</option>
          </Select> */}
        </Row>

        {/* <Row small>
          <Select ref={gameTypeRef} defaultValue={quiz ? quiz.gameType : ''}>
            {GAME_TYPES.map((game, i) => (
              <option key={i}>{game}</option>
            ))}
          </Select>
        </Row> */}

        {/* <Row small>
          <Textarea
            placeholder="Description"
            ref={fullDescriptionRef}
            defaultValue={quiz ? quiz.fullDescription : ''}
          />
        </Row> */}

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
