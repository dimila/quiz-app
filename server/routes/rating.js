const router = require('express').Router()
const Rating = require('../models/Rating')

router.get('/', (req, res) => {
    Rating.find()
        .then(ratings => res.json(ratings))
        .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
    Rating.find({ id: req.params.id })
        .then(ratings => res.json(ratings))
        .catch(err => res.json(err))
})

router.post('/', (req, res) => {
    Rating.create(req.body)
        .then(rating => res.json(rating))
        .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
    Rating.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(rating => res.json(rating))
        .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    Rating.findByIdAndDelete(req.params.id)
        .then(rating => res.json(rating))
        .catch(err => res.json(err))
})

module.exports = router
