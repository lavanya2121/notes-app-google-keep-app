const jwt=require('jsonwebtoken')

//payload or data
const tokenData={
    id:1,
    username:'user1'
}

const token=jwt.sign(tokenData,'jwt@123')//to encode we must provide the secret key
console.log(token)