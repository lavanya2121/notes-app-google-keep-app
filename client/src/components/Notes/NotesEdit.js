import React from 'react'
import {connect} from 'react-redux'
import {startEditNote} from '../../actions/notesAction'
import NoteForm from './Form'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function NoteEdit(props){

    const handleSubmit = (formData) => {
        const id = props.match.params.id
        const redirect = () => props.history.push('/notes')
        props.dispatch(startEditNote(formData, id, redirect))
    }
    return(
        <div className="container">
            <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
             <CardContent>
                 {/* Category Edit Label */}
                <Typography variant="h6" 
                            component="h6" 
                            style={{textAlign : "center"}}>
                     EDIT NOTES
                </Typography>

                {/*NoteForm Component  */}
                <NoteForm handleSubmit={handleSubmit} />
             </CardContent>
            </Card>
        </div>
    )
}

export default connect()(NoteEdit)