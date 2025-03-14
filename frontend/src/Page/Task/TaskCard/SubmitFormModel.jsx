// import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskById, updateTask } from '../../../ReduxToolKit/TaskSlice';
import store from '../../../ReduxToolKit/Store';
import { useLocation } from 'react-router-dom';
import { submitTask } from '../../../ReduxToolKit/SubmissionSlice';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function SubmitFormModel({item,open,handleClose}) {    
  const dispatch=useDispatch();
  const {task}=useSelector(store=>store);
  const location=useLocation();
  const queryParams=new URLSearchParams(location.search);
  const taskId=queryParams.get("taskId");
    const [formData, setFormData]=useState({
        githubLink:"",
        description:"",
        
    }) 
const handleChange = (e) =>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
}


const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(submitTask({taskId,githubLink:formData.githubLink}))
  handleClose()
}


  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={style}>
          <form  onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <TextField label="Github Link"
                    fullWidth
                    name='githubLink'
                    value={formData.githubLink}
                    onChange={handleChange}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    />
                </Grid>                
                <Grid item xs={12}>
                  <Button fullWidth
                  className='customButton'
                  type="submit"
                  sx={{padding:".9rem"}}>
                    Submit
                  </Button>

                  
                </Grid>
            </Grid>
          </form>
          
        </Box>
      </Modal>
    </div>
  );
}
