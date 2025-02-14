const express = require('express')
const cors = require('cors')
const server = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/quiz-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.listen(3333, () => console.log('Server ready on port 3333'))
server.use(express.json())
server.use(cors())
server.set('json spaces', 2)

server.use('/cards', require('./routes/cards'))
server.use('/user', require('./routes/user'))
server.use('/rating', require('./routes/rating'))
server.use('/org', require('./routes/org'))
server.use('/whatsapp', require('./routes/whatsapp'))



