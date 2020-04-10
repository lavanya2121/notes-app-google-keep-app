const bcryptjs=require('bcryptjs')

//get the encrypted password value from the postman or by using the db
const encrypted='$2a$10$JfaJjKiBFedYTi054MgwP.B3xutg6pR540ui5TcGx6xJWmxds.QT.'//user7
const password='secret123'//password that the user provides while registering to the application

bcryptjs.compare(password,encrypted)//compare(incoming password,encrypted password stored in our db) and it is an asynchrounos operation and compare method returns a promise
        .then(function(result){
            console.log(result)
        }) 