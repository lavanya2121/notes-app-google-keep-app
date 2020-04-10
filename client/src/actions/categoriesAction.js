import axios from '../config/axios'
import Swal from 'sweetalert2';

//listing categories
//synchronous-->synhronous action generators are used to put the data we got from the server in our asyn action generators to the store
export const setCategories=(categories)=>{
    return {
        type:'SET_CATEGORIES',
        payload:categories
    }
}

//asynchronous->asynchronous action creators helps to get the data from the server
//to get all the data from the store
export const startSetCategories = () => {
     return(dispatch)=>{
        axios.get('/categories',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')//to get the categories data from the server we need to send the token infor to the server
            }
        })
        .then((response)=>{
            console.log('categories response from the server',response.data)//the data what we get from the server we need to dispatch it to our store
            const categories=response.data
            // dont paste this here you will not get the response
            // Swal.fire({
            //     title: 'Success!',
            //     text: 'You have successfully added the category',
            //     icon: 'success',
            //     confirmButtonText: 'Ok'
            // })
            dispatch(setCategories(categories))
                // Swal.fire({
                //     title: 'Success!',
                //     text: 'You have successfully added the category',
                //     icon: 'success',
                //     confirmButtonText: 'Ok'
                // })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
// -------------------------------------------------------------------------------
//adding categories

//synchronous->to add the categories into  the redux store
export const addCategory=(category)=>{
    return {
        type:'ADD_CATEGORIES',
        payload:category
    }
}

//asynchronous->to add the categories into the db in the server
export const startAddCategory=(formData,redirect)=>{
return(dispatch)=>{
    axios.post('/categories',formData,{
        headers : {
            'x-auth' : localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log('add category response from the server',response.data)
        // const category=response.data
        // dispatch(addCategory(category))
     
        dispatch(startSetCategories())
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully added the category',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        redirect()
    })
    .catch((err)=>{
        console.log(err)
    })
}
}
// ----------------------------------------------------------------------------------
//Removing Categories

//synchronous->to remove the categories from the store
export const removeCategory=(id)=>{
        return {
            type:'REMOVE_CATEGORIES',
            payload:id
        }
}
//asynchrounous-->to remove the categories from the db in the server
export const startRemoveCategory=(id)=>{
        return(dispatch)=>{
            axios.delete(`/categories/${id}`,{
                headers : {
                    'x-auth' : localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                console.log('remove category response from the server',response.data)
                const category=response.data
                dispatch(removeCategory(category._id))
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully removed/deleted the category',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    
// ------------------------------------------------------------------------------------------
// updating/editing categories

//asynchrounos means server related operations
//synchrounous means store related operations

//synchronous->to update the categories in the redux store
export const updateCategory=(category)=>{
    return  {
        type:'UPDATE_CATEGORIES',
        payload:category
    }
}

//asynchronous->to update the categories in the db in the server
export const startUpdateCategory=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/categories/${id}`,formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           console.log('editing category response from the server',response.data)
            const category=response.data
            dispatch(updateCategory(category))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully updated the category',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}