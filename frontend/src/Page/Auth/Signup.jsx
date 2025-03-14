import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../ReduxToolKit/AuthSlice';

const Signup = ({togglePanel}) => {
  const dispatch=useDispatch();
    const [formdata,setFormData]=useState({
        email:"",
        password:"",
        fullname:"",
        role:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formdata,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(register(formdata))
        console.log("login form", formdata)
    }
  return (
    <div>
      <h1 className='text-lg font-bold text-center pb-8'>
        Register</h1>
      <form className='space-y-3' onSubmit={handleSubmit}>
      <TextField fullWidth
        label="Full Name"
        name="fullname"
        type="fullname"
        value={formdata.fullname}
        onChange={handleChange}
        placeholder='enter your fullname...'/>
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
        
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formdata.role}
          label="Role"
          name="role"
          onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
          <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
        </Select>
      </FormControl>
        <div>
                  <Button fullWidth
                  className='customButton'
                  type="submit"
                  sx={{padding:".9rem"}}>
                    Register
                  </Button>
            </div>   
      </form>
      <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>Already have an Account?</span>
        <Button onClick={togglePanel}>Signin</Button>
      </div>
    </div>
  )
}

export default Signup
