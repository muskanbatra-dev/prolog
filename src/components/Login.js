import React, { useState } from 'react'
import { Button, Grid, Paper, TextField, Typography,Link } from '@mui/material'
import logo from '../images/bg.png' 
import login from '../images/Login.png' 
import { useNavigate } from 'react-router-dom'





const Login = () =>{

    let navigate = useNavigate()
    const [values,setValues] = useState({
        email:"",
        password:""
    });
    
    const handleEmailInputChange = (event) =>{
        setValues({...values,email:event.target.value})
    }

    const handlePasswordInputChange = (event) =>{
        setValues({...values,password:event.target.value})
    }


    


    const paperStyle={padding : 20,height:'70vh',width:280, margin : "50px 800px"  }
    


   
    return(
        
           <div>
            <img src={logo} alt="" width='450vh' align="left"  height='100%' />
            
            <Grid align='left'  >
            
            <Paper elevation={10} style={paperStyle}>
            
            <img src={login} alt="" width='300vh' />
             
             Login to your account
             
             
             <TextField 
             label='Email Adress'  
             placeholder='Enter Email Adress' 
             value={values.email}
             type="email" 
             fullWidth required
             onChange={handleEmailInputChange}
             
             />
             
             <TextField 
             label='Password'
             placeholder='Enter Password' 
             value={values.password}
             type="password"
             fullWidth required
             onChange={handlePasswordInputChange}
             
             />
               
               <Typography>
               <Link href="" onClick={()=>{navigate("/Forgot")}} >Forgot Password?</Link>
               </Typography>
               
            <Button type='submit' color='primary' fullWidth variant="contained" >Login</Button>

                
            </Paper>
            </Grid>
            
        </div>
    )
}
export default Login