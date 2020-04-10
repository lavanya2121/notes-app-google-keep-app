const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Notes Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
      
    },
    // body: {
    //     type: [String],
    //     required: true 
    // },
    description: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    category:{
        type: Schema.Types.ObjectId,
        //required: true,
        ref: 'Category'
    },
    photoPath: {
        type: String
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        //ref : 'User'
    },
    isPinned: {
        type: Boolean,
        default: false
    }
})

// Notes Model 
const Note = mongoose.model('Note', noteSchema)

module.exports = Note