const mongoose = require('mongoose')

const Org = mongoose.model('Org', {
  email: String,
  password: String
})

module.exports = Org
