const mongoose = require('mongoose')

const Card = mongoose.model('Card', {
  img: String,
  date: Date,
  title: String,
  city: String,
  time: String,
  adress: String,
  price: String,
  place: String,
  location: String
})

module.exports = Card
