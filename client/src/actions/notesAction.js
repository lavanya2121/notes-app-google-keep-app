import axios from '../config/axios'
import Swal from 'sweetalert2';

//list
export const setNotes = (notes) => {
    return { 
        type: 'SET_NOTES', 
        payload: notes 
    }
}

export const startSetNotes = () => {
    return (dispatch) => {
        axios.get('/notes',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
                console.log('notes list response from the server',response.data)
                const notes = response.data
                dispatch(setNotes(notes))
            })
    }
}

// add
export const addNote= (note) => {
    return { 
        type: 'ADD_NOTES', 
        payload: note 
    }
}

export const startAddNote = (obj) => {
    console.log('add form',obj.formData)
    return (dispatch) => {
        axios.post('/notes', obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
                console.log('Note add response from the server',response.data)
                Swal.fire(
                    'Added',
                    'Note Successfully created',
                    'success'
                )
                //  const note= response.data
                // dispatch(addNote(note))
                dispatch(startSetNotes())//must be startSetNotes()
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully added a Note',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                obj.redirect()
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

 //remove
export const removeNote = (id) => {
    return { 
        type: 'REMOVE_NOTES', 
        payload: id 
    }
}

export const startRemoveNote = (id) => {
    return (dispatch) => {
        axios.delete(`/notes/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
                console.log('remove note response from the server',response.data)
                const notes = response.data
                dispatch(removeNote(notes._id))
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully removed/deleted the Note',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

//edit
export const editNote = (note) => {
    return {
        type : "EDIT_NOTES" , 
        payload : note
    }
}

export const startEditNote = (formData, id, redirect) =>{
    return(dispatch) =>{
        axios.put(`/notes/${id}`, formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('note edit response from the server',response.data)
            const note = response.data
            dispatch(editNote(note))
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully updated the Note',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            dispatch(startSetNotes())//imp
            redirect()
        })
        .catch((err) => {
            console.log(err)
        })
    }
}