const router = require('express').Router()
const Whatsapp = require('../models/Whatsapp')

router.get('/', (req, res) => {
    Whatsapp.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
    Whatsapp.find({ id: req.params.id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

router.post('/', (req, res) => {
    Whatsapp.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
    Whatsapp.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    Whatsapp.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

module.exports = router
