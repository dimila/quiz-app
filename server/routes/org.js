const router = require('express').Router()
const Org = require('../models/Org')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
  Org.find()
    .then(orgs => res.json(orgs))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Org.find({ id: req.params.id })
    .then(orgs => res.json(orgs))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Org.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(org => res.json(org))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Org.findByIdAndDelete(req.params.id)
    .then(org => res.json(org))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  Org.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' })
    }

    if (!email || !password) {
      throw new Error('Email and password could not be empty!')
    }

    const isEqual = bcrypt.compare(password, user.password)
    if (!isEqual) {
      throw new Error('Password wrong!')
    }
  })
})

// router.get('/viewer', async (req, res, next) => {
//     try {
//         const { isAuth, userId } = req

//         if (!isAuth) {
//             return res.status(200).json({ isLoggedIn: false })
//         }

//         const db = await connectDB()
//         const user = await db
//             .collection('users')
//             .findOne({ _id: ObjectId(userId) })

//         return res.status(200).json({
//             ...user,
//             isLoggedIn: true,
//             password: ""
//         })
//     } catch (error) {
//         next(error)
//     }
// })

module.exports = router
