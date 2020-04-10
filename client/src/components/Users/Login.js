import React from 'react'
import {connect } from 'react-redux'//make it as a connected component
import { startLogin } from '../../actions/userAction';
import { withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'

//material -ui
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    //handleChange EventHandler
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //handleSubmit EventHandler
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            email:this.state.email,
            password:this.state.password
        }

        const redirect=()=>this.props.history.push('/')
        this.props.dispatch(startLogin(formData,redirect)) 
    }

    render(){
        return(
            <div>
                 <Card style={{width : "500px",margin : "0 auto",border : "1px"}}>
                    <CardContent>
                       <Typography variant="h6" 
                                   component="h6" 
                                   style={{textAlign : "center"}}>
                             Login with us
                        </Typography>
                <form noValidate 
                      onSubmit={this.handleSubmit} 
                      autoComplete="off" 
                      style={{width : "100%"}}>

                <Grid container spacing={2}>

                  <Grid item xs={12}>

                  {/* Email Text Field */}
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
                      {/* Password Text Field */}
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        autoFocus
                        placeholder="enter password"
                        value={this.state.password}
                        onChange={this.handleChange}
                       />
                      </Grid>
                    
                      {/* Remember Me check box */}
                      <FormControlLabel
                            control = { <Checkbox value = "remember" 
                                                  color = "primary" /> 
                                       }
                            label = "Remember me"
                       />

                    {/* Login Button */}
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained" 
                        color="primary"
                        style = {{marginTop : "20px"}}
                        >LOGIN
                    </Button>

                    <Grid container>
                        <Grid item xs>
                        <Grid item style = {{textAlign : "right",marginTop : "20px"}}>
                                    <Link to = "/users/register">
                                         Don't have an account? Register
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

export default withRouter(connect()(Login))
