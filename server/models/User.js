const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  telephone: String,
  email: String,
  team: String,
  nr_participants: String,
  need_team: Boolean
})

module.exports = User
