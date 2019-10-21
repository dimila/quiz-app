const mongoose = require('mongoose')

const Rating = mongoose.model('Rating', {
   
    name: String,
    city: String,
    score: Number
    
})

module.exports = Rating