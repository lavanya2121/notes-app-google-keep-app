const jwt=require('jsonwebtoken')

//first we need to chk whether the token provided by the user is correct
//copy n passte the token that we get once we login

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdkYjg0ZmZkMjZjZDE5NzRiNmQ3MWUiLCJ1c2VybmFtZSI6InVzZXIxMiIsImNyZWF0ZWRBdCI6MTU4NTU0NjE1NjU1MywiaWF0IjoxNTg1NTQ2MTU2fQ.VSKvlYfrUtwvr7EIo8xmt7UF-gozIplxNCMzP4-sFwc'

console.log(jwt.verify(token,'jwt@123'))//secret key or special key
//if we provide wrong secret key then we get an error json webtoken->invalid signature
//if we dont provide the token(long token ) then we get an error token must be provided
//if we provide wrong token say(const token='123')jsonwebtoken-->jwt malformed
//it will return the original state of that token
//iat is a time when the token was created