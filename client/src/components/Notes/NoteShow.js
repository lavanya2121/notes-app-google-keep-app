import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {noteFind} from '../../selectors/notesSelector'

function NoteShow(props){
    return (
        <div>
            <h1>Show Page</h1>
              {
                props.note ? (
                    <div>
                        <p>{props.note._id}</p>
                        <p>{props.note.name}</p>
                        <Link to={`/notes/edit/${props.note._id}`}>edit</Link><br />
                        <Link to='/notes'>back</Link>
                    </div>
                ) : (
                        <div>loading...</div>
                    )
            }  

        </div>
    )
}

const mapStateToProps = (state,props) => {

 const id=props.match.params.id
 //console.log("id is what"+ id)
    return {
        category: state.categories,
        note : noteFind(state.notes,id)
   
    }
}

export default connect(mapStateToProps)(NoteShow)