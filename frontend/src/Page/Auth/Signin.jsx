import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../ReduxToolKit/AuthSlice'

const Signin = ({togglePanel}) => {
  const dispatch=useDispatch()

    const [formdata,setFormData]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formdata,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(formdata))
        console.log("login form", formdata)
    }
  return (
    <div>
      <h1 className='text-lg font-bold text-center pb-8'>
        Login</h1>
      <form className='space-y-3' onSubmit={handleSubmit}>
        <TextField fullWidth
        label="Email"
        name="email"
        type="email"
        value={formdata.email}
        onChange={handleChange}
        placeholder='enter your email...'/>
        <TextField fullWidth
        label="Password"
        name="password"
        type="password"
        value={formdata.password}
        onChange={handleChange}
        placeholder='enter your password...'/> 
        <div>
                  <Button fullWidth
                  className='customButton'
                  type="submit"
                  sx={{padding:".9rem"}}>
                    Login
                  </Button>
            </div>   
      </form>
      <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>Don't have an Account?</span>
        <Button onClick={togglePanel}>Signup</Button>
      </div>
    </div>  
  )
}

export default Signin
