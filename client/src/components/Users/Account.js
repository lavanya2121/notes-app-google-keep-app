import React from 'react'
import {connect} from 'react-redux'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'

function Account(props){
    //console.log("Account-->User Profile",props)
    return(
        <div>
            <Card style={{width : "500px",margin : "0 auto"}}>
               <CardContent>
       
            {/* User Profile/logged-in Information */}
            <h1>User Account Information:</h1>
            <h4>User-ID:{props.user._id}</h4>
            <h4>User-Name:{ props.user.username }</h4>
            <h4>User-Email:{ props.user.email }</h4>
            {/* <h2>Password:{props.user.password}</h2> */}
            {/* <h2>Token Info:{props.user.tokens[token]}</h2> */}
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Account)