
import React from 'react'
import {connect} from 'react-redux'
import { startRegister } from '../../actions/userAction';
import {Link} from 'react-router-dom'

//material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
    }

    //handleChange Eventhandler
    handleChange=(e)=>{
        this.setState({
            //setState becoz we are doing redux n not react
            [e.target.name]:e.target.value
        })
    }

    //handleSubmit Eventhandler
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        //console.log("User Registration Form data",formData)
    
        const redirect=()=>{
          return this.props.history.push('/users/login')
        }

        this.props.dispatch(startRegister(formData,redirect))   
    }

    render(){
        return(
            <div>
                 <Card style={{width : "500px",margin : "0 auto",border : "1px"}}>
                   <CardContent>

                      <Typography variant="h6" 
                                  component="h6" 
                                  style={{textAlign : "center"}}>
                          Register with us
                      </Typography>

                <form noValidate 
                      onSubmit={this.handleSubmit} 
                      autoComplete="off" 
                      style={{width : "100%"}}>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                     
                     {/* Username input field */}
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        autoFocus
                        placeholder="enter username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </Grid>

                  <Grid item xs={12}>

                  {/* Email input field */}
                  <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        autoFocus
                        placeholder="enter email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                  </Grid>
                    

                    <Grid item xs={12}>

                      {/*Password input field  */}
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        autoFocus
                        placeholder="enter password"
                        value={this.state.password}
                        onChange={this.handleChange}
                       />
                    </Grid>

                    {/*  Register Button */}
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained" 
                        color="primary"
                        style = {{marginTop : "20px"}}
                     >
                     REGISTER
                    </Button>

                    <Grid container>
                        <Grid item xs>
                           <Grid item style = {{textAlign : "right",marginTop : "20px"}}>
                                    <Link to = "/users/login">
                                         Already have an account? Sign in
                                    </Link>
                           </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                 </form>
                   </CardContent>
                </Card>
            </div>
        )
    }
}


export default connect()(Register)