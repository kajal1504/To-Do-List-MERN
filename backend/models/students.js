const mongoose=require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const StudentModel = mongoose.model("auth",StudentSchema)
module.exports = StudentModel