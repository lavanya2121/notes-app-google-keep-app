
import axios from '../config/axios'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

//register
export const startRegister=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                // //alert(response.data.message)
                // swal(`${response.data.message}`, "","error")
                const displayMessages = []
                    for(const key in response.data.errors) {
                        displayMessages.push(response.data.errors[key].message)
                    }
                    Swal.fire({
                        title: 'Error!',
                        text: `${displayMessages.join(', ')}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
            }else{
                //console.log('register response from the server',response.data)
                //swal("Successfully Registered","","success")
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                console.log('register response from the server',response.data)
                redirect()
            }
        })
    }

}


 //synchrounous--setUser() is for both login n account
export const setUser=(user)=>{
    return { 
            type:'SET_USER', 
            payload:user
           }
}

// // ------------------------------------------------------------------

//account
export const startSetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log("account response from the server",response.data)
            
            const user=response.data
            dispatch(setUser(user))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully loggedin to the Notes App',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })

    }
    
}


//login
export const startLogin = (formData,redirect) => {
    return (dispatch) => {
        axios.post('/users/login',formData)
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                //swal(`${response.data.error}`,"","error")
                    const displayMessages = []
                    for(const key in response.data.errors) {
                        displayMessages.push(response.data.errors[key].message)
                    }
                    Swal.fire({
                        title: 'Error!',
                        text: `${displayMessages.join(', ')}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
            } else {
                console.log("account",response.data.token)
                if(response.data.token) {
                    localStorage.setItem('authToken',response.data.token)
                axios.get('/users/account',{
                    headers : {
                        'x-auth' : localStorage.getItem('authToken')
                    }
                })
                .then((response) => {
                    const user = response.data
                    console.log("login response from the server",user)
                    dispatch(setUser(user))
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have successfully loggedin',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    redirect()
                })
                } else {
                    //swal('invalid email/password ',"","error")
                    Swal.fire({
                        title: 'Error!->Invalid Email/Password',
                        text: `${response.data.error}`,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        timer: 2000
                    })
                }
                
            }
        })
    }

}

//logout
export const removeUser=()=>{
    return {
        type:'REMOVE_USER'
    }
}

export const startLogout=()=>{
    return (dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log("logout response from the server",response.data)
            if(response.data.notice){
                console.log("authremove/userremove")
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully logged out of the application',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                window.location.href="/users/login"
            }
        })
    }
}
// --------------------------------------------------

