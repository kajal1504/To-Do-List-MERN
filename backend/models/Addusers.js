const mongoose = require('mongoose')

const AdduserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,  // email must be unique
        
    },
    age: {
        type: Number,
        required: true
    }
})

//create a model
const AdduserModel = mongoose.model("Addusers",AdduserSchema)
module.exports = AdduserModel