import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { acceptDeclineSubmission } from '../../../ReduxToolKit/SubmissionSlice';

const SubmissionCard = ({item}) => {
  const dispatch=useDispatch();


    const handelAcceptDecline = (status)=>{
      dispatch(acceptDeclineSubmission({id:item.id,status}))
        console.log(status)
    }
  return (
    <div className="rounded-md bg-black p-5 flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span> GitH hub : </span>
          <div className="flex items-center gap-2 text-[#c24dd0]">
            <OpenInNewIcon />
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
              Go To Link
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p>Submission Time : </p>
          <p className="text-gray-400">{item.submissionTime}</p>
        </div>
      </div>
      <div>
        {
            item.status==="PENDING" ? <div className='flex gap-5'>
                <div className='text-green-500'>
                    <IconButton color="success" onClick={()=> handelAcceptDecline("ACCEPTED")}>
                        <CheckIcon/>
                    </IconButton>
                    </div>
                    <div className='text-red-500'>
                    <IconButton color="error" onClick={()=> handelAcceptDecline("DECLAINDE")}>
                        <CloseIcon/>
                    </IconButton>
                    </div>

            </div> : <Button size='small' color={item.status==="ACCEPTED"?"success":"error"} 
            variant='outlined'>{item.status==="ACCEPTED"?"Accepted":"Declined"}</Button>
        }
      </div>
    </div>
  )
}

export default SubmissionCard
