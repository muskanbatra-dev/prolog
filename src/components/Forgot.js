import React, { useState } from 'react'
import { Button, Grid, Paper, TextField, Typography,Link } from '@mui/material'
import ques from '../images/fg.png' 
import login from '../images/Login.png' 
import { useNavigate } from 'react-router-dom'





const Forgot = () =>{

    let navigate = useNavigate()
    const [values,setValues] = useState({
        email:"",
        password:""
    });
    
    const handleEmailInputChange = (event) =>{
        setValues({...values,email:event.target.value})
    }

    


    


    const paperStyle={padding : 20,height:'70vh',width:280, margin : "50px 800px"  }
    


   
    return(
        
           <div>
            <img src={ques} alt="" width='250vh' align="left"  />
            
            <Grid align='left'  >
            
            <Paper elevation={10} style={paperStyle}>
            
            <img src={login} alt="" width='300vh' />
             
             Enter your email Adress
             
             
             <TextField 
             label='Email Adress'  
             placeholder='Enter Email Adress' 
             value={values.email}
             type="email" 
             fullWidth required
             onChange={handleEmailInputChange}
             
             />
             
            
               
               <Typography>
               <Link href="" onClick={()=>{navigate("/Forgot")}} >Forgot Password?</Link>
               </Typography>
               
            <Button type='submit' color='primary' fullWidth variant="contained" >Submit</Button>

                
            </Paper>
            </Grid>
            
        </div>
    )
}
export default Forgot