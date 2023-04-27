const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    textarea:{
        type: String,
    }

})

const user = mongoose.model('user', userSchema)
module.exports = user