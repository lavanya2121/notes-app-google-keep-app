const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Category Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
       // ref : 'User'
    }
 
})

//Category Model 
const Category = mongoose.model('Category', categorySchema)

module.exports = Category