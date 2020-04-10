import React from 'react'
import {connect} from 'react-redux'
import NoteForm from './Form'
import {startAddNote} from '../../actions/notesAction'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function NoteNew(props){

    const handleSubmit = (formData) => {
        console.log("Note page", formData)
        const redirect = () => props.history.push('/notes')
        props.dispatch(startAddNote({formData, redirect}))
    }

    return (
      <div>
        <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
           <CardContent>
                {/* Add Note Label */}
                <Typography variant="h6" component="h6" style={{textAlign : "center"}}>
                     ADD NOTES
                </Typography>
        {/* <h2>Add Notes</h2> */}
        <NoteForm handleSubmit={handleSubmit} />
          </CardContent>
        </Card>
    
    </div>
    )
}

export default connect()(NoteNew)