//lots of changes are done in Notes Controller
const Note = require('../models/note')
const Category=require('../models/category')
const fs = require('fs')

//setup api
//List
module.exports.list = (req, res) => {
    Note.find({ user:req.user._id }).populate('category',['_id','name'])
        .then((notes) => {
            res.json(notes)
        })
        .catch((err) => {
            res.json(err)
        })
}

//Show
module.exports.show = (req, res) => {
    const id = req.params.id
    // Note.findById(id).populate('category')
    //     .then((note) => {
    //         if (note) {
    //             res.json(note)
    //         } else {
    //             res.json({})
    //         }
    //     })
    Note.findOne({_id:id,user:req.user._id }).populate('category',['_id','name'])
         .then((note)=>{
            if (note) {
              res.json(note)
            } else {
            res.json({})
            }
         })
        .catch((err) => {
            res.json(err)
        })
}

//changes done
//Create
module.exports.create = (req, res) => {
    const body = req.body
    if (req.file) {
        const file = req.file
        body.photoPath = file.location
    }
    const note = new Note(body)
    //important
    note.user = req.user._id
    note.save()
        .then((note) => {
             //populating category
    Category.findOne({_id:note.category,user:req.user._id}, '_id name')
            .then((category)=>{
                note.category=category
                res.json(note)
            })
        .catch((err) => {
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

//Update
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    // Note.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    //     .then((note) => {
    //         if (note) {
    //             res.json(note)
    //         } else {
    //             res.json({})
    //         }
    //     })
    if (req.file) {
        const file = req.file
        body.photoPath = file.location
    }
    Note.findOneAndUpdate({_id:id,user:req.user._id,},body,{new:true,runValidators:true}).populate('category',['_id','name'])
         .then((note)=>{
             if(note){
                res.json(note)
             }else{
                 res.json({})
             }
             
         })
        .catch((err) => {
            res.json(err)
        })
}

//Delete
module.exports.destroy = (req, res) => {
    const id = req.params.id
    // Note.findByIdAndDelete(id)
    //     .then((note) => {
    //         if (note) {
    //             res.json(note)
    //         } else {
    //             res.json({})
    //         }
    //     })
    Note.findOneAndDelete({_id:id,user:req.user._id})
         .then((note)=>{
             if(note){
                 res.json(note)
             }else{
                 res.json({})
             }
         })
        .catch((err) => {
            res.json(err)
        })
}

//duplicate
module.exports.duplicate=(req,res)=>{
    const id=req.params.id
    Note.findOneAndDelete({_id:id,user:req.user._id})
      .then((foundNote)=>{
          const duplicate={...foundNote._doc}
          delete duplicate._id
          const note=new Note(duplicate)
          note.save()
              .then((note)=>{
                  res.json(note)
              })
              .catch((err)=>{
                  res.json(err)
              })
      })
      .catch((err)=>{
          res.json(err)
      })
}



