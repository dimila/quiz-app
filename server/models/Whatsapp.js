const mongoose = require('mongoose')

const Whatsapp = mongoose.model('Whatsapp', {
    tel: String
    
})

module.exports = Whatsapp
