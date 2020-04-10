import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCategory} from '../../selectors/categoriesSelector'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CategoryForm extends React.Component{
    constructor(props){
        //console.log('Categories form constructor',props)
        super(props)
            this.state={
                name:props.category ? props.category.name:'',
            }
        }

        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        
        handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                name:this.state.name,
            }
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

                    {/* Name input Textfield */}
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        autoFocus
                        placeholder="Enter category name"
                        value={this.state.name}
                        onChange={this.handleChange}
                     />
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
                </Grid>
            </form>
            </CardContent>
            </Card>
        </div>
    )
}
}
const mapStateToProps=(state,props)=>{
    //console.log('form',props)
    const id=props.match.params.id
    return {
        category:findCategory(state.categories,id)
        }   
}
export default withRouter(connect(mapStateToProps)(CategoryForm))


