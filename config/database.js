
const mongoose = require('mongoose')

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notes-database-new'

const setupDB = () => {
    mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("connected to db")
        })
        .catch((err) => {
             console.log(err)
        })
}
module.exports = setupDB