import React, { useState } from 'react'
import "./login.scss"
import TextField from '@mui/material/TextField';
import Button from './styled';


function Login() {
    const [data,setData]=useState({Username:"",password:""})
    const [toggle,setToggle]=useState(false)
    const [validInput,SetVlidInput]=useState({Username:"EMPTY",password:"EMPTY"})

    const handel=(e)=>{
    const {name,value}=e.target
    console.log(name)
     if(name==='Username' || name==='password'){
      SetVlidInput({...validInput,[name]:"EMPTY"})
     }
    setData({...data,[name]:value})
    }
    const ShowHide=()=>{
      setToggle(!toggle)
    }

    const submit=()=>{
      const newValidInput = { ...validInput }
      let allvalid=true
      if(data.Username.length<1){
        newValidInput.Username = "NOT-FILLED";
        allvalid=false
      }
      if(data.password.length<1 || !data.password){
        newValidInput.password = "NOT-FILLED";
        allvalid=false
      }
      SetVlidInput(newValidInput);
      if(allvalid==true){
        console.log("LOGIN IS DONE")
      }
    }
    
    
  return (
    <div className='loginBox'>
      <h5>Login</h5>
        <div className='loginBox__textBox'>
        <TextField  type='text' name='Username' onChange={handel} id="standard-basic" label="UserName" variant="standard" />
       {validInput.Username==="NOT-FILLED" && <h4 className='error_msg'>Fill the username</h4>}
        </div>
        <div  className='loginBox__textBox' >
        <div className='loginBox__passwordCon'>
        <TextField onChange={handel} type={toggle?"password":"text"} name='password' id="standard-basic" label="PassWord" variant="standard" />
        <h2 onClick={ShowHide}>**</h2>
        </div>
        {validInput.password==="NOT-FILLED" && <h4 className='error_msg'>Fill the Password</h4>}
        </div>
        <Button onClick={submit} color="gray">login</Button>
    </div>
  )
}

export default Login