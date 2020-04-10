import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {noteFind} from '../../selectors/notesSelector'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const customStyles = {
//     border: '1px solid hsl(0,0%,80%)',
//     borderRadius: '4px',
//     padding: '5px',
//     backgroundColor: 'white'
// }

class NoteForm extends React.Component {
    constructor(props){
        console.log('Note Form',props)
        super(props)
        this.state = {
            title:props.notes ? props.notes.title : '',
            description:props.notes ? props.notes.description : '',
            image:null,
            category:props.notes ? props.notes.category._id :'',
            
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImageChange = (e) => {
        this.setState({image: e.target.files[0]})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title:this.state.title,
            description:this.state.description,
            category : this.state.category

        }
        // const form = new FormData()
        // form.append('image', this.state.image)
        // for (let key in formData) {
        //     form.append(key, formData[key])
        // }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <Card style={{width : "500px",margin : "0 auto",border : "1px"}}>
                 <CardContent>
                <form noValidate onSubmit={this.handleSubmit} autoComplete="off" style={{width : "100%"}}>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                    {/* Title input Textfield */}
                    <TextField
                        variant="outlined"
                        // margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        autoFocus
                        placeholder="Enter Note title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    </Grid>

                    
                        {/* <label htmlFor="title">title</label>
                        <input type="text"  id="title" 
                        onChange={this.handleChange} value={this.state.title} 
                        name="title" /><br/> */}
                   
                   <Grid item xs={12}>
                    {/* Description input TextArea */}
                    <TextareaAutosize
                        variant="outlined"
                        // margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="description"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        rowsMax={10}
                        style = {{ style : '500px'}}
                        cols="63"
                        aria-label="minimum height"
                        placeholder="Enter Note Description"
                        onChange={this.handleChange}
                        value={this.state.description} 
                        />
                    </Grid>

                        <Grid item xs={12}>
                    {/* Title input Textfield */}
                    <FormControl variant="outlined">
                    {/* <InputLabel id="category">Select Category</InputLabel> */}
                        <Select
                             variant="outlined"
                            //  margin="normal"
                             required
                             fullWidth
                            labelId="category"
                            id="category"
                            value={this.state.category} 
                            className="form-control" 
                            name="category" 
                            onChange={this.handleChange}
                            style = {{ width : '470px'}}
                           
                        >
                         <MenuItem defaultValue>
                        <em>Select</em>
                        </MenuItem>
                        {
                                this.props.category ? this.props.category.map(category=>{
                                    return (<MenuItem key={category._id} value={category._id}>
                                        {category.name}
                                        </MenuItem>)
                                }) : 'loading'
                            }

                        </Select>
                    </FormControl>
                    </Grid>
                   {/* Submit Button */}
                <Button 
                     type="submit"
                     fullWidth
                     variant="contained" 
                     color="primary"
                     style = {{marginTop : "20px"}}
                     >SUBMIT
                </Button>

                    {/* <input type="submit" value="submit" className="btn btn-primary" /> */}
                    </Grid>
                </form>
                </CardContent>
               </Card>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id=props.match.params.id
    return {
        category:state.categories,
        notes : noteFind(state.notes,id),
       
    }
}

export default withRouter(connect(mapStateToProps)(NoteForm))

