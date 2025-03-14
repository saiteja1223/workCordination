import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../ReduxToolKit/AuthSlice';
import { assignTaskToUser } from '../../ReduxToolKit/TaskSlice';
import { useLocation } from 'react-router-dom';

// import store from '../../ReduxToolKit/Store';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline : 'none',
  boxShadow: 24,
  p: 2,
};


const tasks=[1,1,1,1]
export default function UserList({open,handleClose}) {    

 const dispatch=useDispatch();
const {auth}=useSelector(store=>store)
const location=useLocation();
  const queryParams=new URLSearchParams(location.search);
  const taskId=queryParams.get("taskId");

 React.useEffect((item)=>{
  dispatch(getUserList(localStorage.getItem("jwt")))
 },[]) 


 const handleAssignTask=(user)=>{
  dispatch(assignTaskToUser({userId:user.id, taskId:taskId}))
 }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {
            auth.users.map((item,index)=>
            <>
            <div className='flex items-center justify-between w-full'>
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhIQEhMWEhUVFRUWFRgWEhAVExYYFRUYGBcTFRcYHSggGBoxGxcWIjEhJSkrLy4uFyA0OTQsOCguLisBCgoKDg0OGhAQGy0mHyUtLy0uKy0tLS0tKy0rLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABLEAACAQIDBAYFBgsGBQUAAAABAgADEQQFIRIxQVEGYXGBkaETIjKx0QcjQlJiwRQVcnOCkrLC0+HwMzRTorPxFlSTo6QIQ2NkdP/EABoBAQACAwEAAAAAAAAAAAAAAAABAwIEBQb/xAA0EQACAQIDBAgFAwUAAAAAAAAAAQIDEQQSISIxUYEFEzJBcbHB8BQzYdHxcpGhIzRSsuH/2gAMAwEAAhEDEQA/AO4xEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERKf0j6dUsOzUqQ9PVXRrMBTQ8mbW7fZG62pEBK5cJgxOKSmL1HVBzZlUec5Tj+m2MrLshloD/4lIY9rMSV7rH3St1U2mLOTUc7ySSe9jqZFzNQO64bM6FQ2p1qdQ8lqIx8jNyfnTFVqaaHZB5AXM2cm6UYqg4NCs9hvRyXpkcin0e0WPXIuMh+golWyTprhq6Kajrh6m5kdtkA/Zc2BHLj1SzJUBAIIIO4g3B7JkYNWPcREAREQBERAEREAREQBERAEREAREQBERAEREARKb006e0MB8ytq2IIHqA6UwdzVSN3PZ3nqBvOd1OnuLqttNiinJU9CijqFjc95MhsyUWyw/Kz00NJvwHD1NltktXZSQwB9mkG4X1JtruHE3o2WW2FG4AAntOoHuPeOUj8+wq1Pntsli3rEsW29ttSSdb31vfiZ9wuM07de9jcD+uUxM0TNXEcB3nkJAZnnlvm6VyTxHtN2TSx+Paq3oKOv1m4dp6uQm3gKCUTZR6Wqd55dZPAQBgMoqP69Zthfqg6ntO+TSYijSGwpA6hNelTL6sS/UmiDtY2B8ZtINnQbCdl2Plb3wLGGpmKfb/VNpt5J0orYVtrD1LC+tNgTTbtXn1ix65hIv9Nu4EffMFbDA638V18bwTvO2dEOltLHIQB6Oqou9Mm+n10P0l93HeL2WfnLK8Y9CqlWm2y6G6n3jrBGhHEGd9yTM0xNCnXTc41HFWGjKew3mSZVJWJCIiSQIiIAiIgCIiAIiIAiIgCIiAIiIAlf6dZ4cFga+JWxdVC0wdR6SoQiEjiATcjkDLBOJfL5mhbEYXBXIRKZruOBZ2amneAlT9cyGSldnPaFXbdne9Z2JZmYFyzE3LHW178dZKJiFtZqOn5CnysJo4Guyj1VAH9cTMlbMG4hf1k+MxLTHmno9kmn6hBBZbkaA/VMi62IYKqJ7T+Q4k933zNXx6n1WsQdN4JF/qnhPmX0RtFm1OgAAOgA3H398EG9luD2V2VNgfabix4939ab5KUaaqLKt+0aX57PE9ZueuaDYsjcpPaQPfNDE5g531FQcgbny084J3FhqYgDV2t3zWqZtTXdrKy2Kp7yWqHrOyPAXPnPIzW3sKqddtfE3MWIuWX8aufYpm3OxtPBzCt9kfpJ8ZW3xjtvqDvLH3z0isd1TwtJsLlkTFMfaA7rH3TpXyU58qO2FdrCqQ1M8A4FmU8iQFt+TbiJxZVrrqrBurcfOSmTZ564V706gIsd2oOnnxghn6riRXRzMxicNSr8WWzjk66MPEHutJWZFYiIgCIiAIiIAiIgCIiAIiIAiIgCfnz5eqgXM0P/ANSlft9LX+60/Qc/Pv8A6h8Gy47D1/o1MPsD8qlUcsPCqnjIZKObVMa7aDy3zdwmRVKmpNvG8ydFcBtlqhG47I9598vuAwoEoqVGnZG9SoKUc0itYTopUXVdi/OzExX6K1DqSt+YDX98vAIA1IHbpPhIO4g9hBmHWSLOohwOd1ujL/4n7Xxms3RpvrjwPxnRKtAGYDhhykdbIn4enwKCOi7/AFge4/GZqfRWp9nw/nL0KQntVEnrZD4enwKUOiVT7HgfjH/CFTkv+YS87QG82mSm4O4g9hBjrZEfDw4FI/4axCC6HdwJJXwIkdWQVj6Govoq49gncTwF+XV4cp1Sgole+UDJUbD+nAsyPT1G+zOFPvv3TOM3fUpqUYpaF0+QfM2q4WvSf2qVQBgd4JBX9wTp85L8hOHdHzIvxbD62sGYJU2n79D3zrUvRpsRESSBERAEREAREQBERAEREAREQBOZfL/glfLVqkevSrpsH8sFWU9WoPaol/zTMqeHTbqG3IDeTyE5X8pvShMZgatBV2bNTcetc+o408LzFzSdmWRpylqloUnolhwKA/Kf/KxX7plzvOlpn0SVqaH6RtUdx9kBEYKe3Xq4zQ9MaeABXQk1T/3WA82B7pkwmR0adJXZBUdgGJcbW/UAA6DTjNe0U3KXE3M0mlTjporshauKRjc4lSeZpYlz4lRPH4Wo3V0/6eJX9wzdr0KXClTH6CfCYfwWn/hp+qss6xcCp4eXFG/k+eOGCelWoCwuCam0BZtF9Iqk67OgvullTHBtxlL/ABdTaw2QOBtpod/fMeCxrKQpOut+0Myk/wCXzmE4qSui2nOUHklyLy2KAlfz7OWBKLVSmCFNyX2t5vogJAtbW01auNPHkxP6KlreVpELgwbM3rMwDG+67C+7vkQgltMmtUbeSH7n1sSDq2IU/o4k/uTJSropuMQt/wA1iR5hZ7XDU/qL+qsz0qFL/CQ/oL8Ja6iKPh5cUWLo50opginVxFNhwZhWUjqLOgUjtMs/SqzYDEka/NMw/R9b7pTaOUYespX0ao3BlGzY9dt46vdvmfo9XP4BmWHJJWklTYvwVqTEDyEx2Wm4me3FqMtb7jq3yQm+HrHnUX/TWX2cZ+T/AKX08Hh9h12i5Vt9voKLeU6lkmd0sUu1TOo3qd46+sS1TV7GtKnJLNbQlIiJkViIiAIiIAiIgCIiAIiIAiIgHJPlTzNvStTB9nZRe8BifPylExmFH4PVbiEJvx01l2+UzBkYlzwOw47CoUnxVpWa1Law9VRvNNx3lTNNvb14nVgv6StwK5iGvgE7ag/8lZZPQbVCl+bT9kSrlr4FvsvU86qP7jLlg9aFL82nkoEzn2ebKqXbf6Y+RVMydaZsbX6zYDtPCRtPHLtAMAA2isrBlJ5X4GTec5OlR9sg37TY8N3ZNSrk6MACDoQdDa9t1/EwstiZKrmurWNpKAtfqlXr4hUe5vvqblB/91+bCXAr6tuq3jpKmm01RVXiXPjVeZU+yyuvfPG3AU8etRiBf+zq71AH9k/JjJUU/UQ/YX9kTA6Mpem3FKhH/TYffN/DptUqZ5ovuEN3jzIgmqju76EHWxoDbI1PG5sB2mb+AxCu2yCCbX0Nx4z4uVKCx+tv4jfeZ8syhVqB9QRfiba6bpDy2M0qmbuLFltCxBkZkjWw+bfmvfRMsGEFpV8HU2cLmh5mmneQFkQ7MuRNftw5+R9p4bapqfsjyAEuPyZZg9LE00voWCnsbT+uyV7D0/m1HVLD0DwJbF0QB9MHuXU+QMwb2ufqWqP9LXh6Hc4iJuHKEREAREQBERAEREAREQBERAKx03yU4ikKiDaqU76De6H2lHM6AjsI4zl1Ols7tVM7xKR0r6JMzNiMKBtHWpSuAHP10J0DcwdDv0N70Vad9UbeHrqOzLccp/ESJTqUFJ2XYuNrW11C7OlrrYW59d9ZDYetjcKPRehaqg9kqC+/XeoOnaAZcMXQrAnbw9amF9pno1VQagC7EW3nTXWeKTStTadmbMqUZWcXa3Ap9TO8Sd+Eq/qv/DmL8bV/+Vq+Dfwpd2ExtTk51wRj1b/yZSa2IxVUbK0TSHFnuCOwkDyBM3OjWVHbDN9EWGm4CWLEUtLSPSq9O4Ww7tZEptqyJhSSeZtt/U8Z1gPnUZeyQhoYjDEqKXpKZ1GzckdQ3kdhB6jJtcbUvfTvE3hV2hrEZNITpKTutPqVT8Z1f+Wq+f8ACmSnm9YbsLU/zfwpZxTmRFk51wRHVP8AyZWzjsbWHo6eHZNrQlhYWPWwUe+WSj0bCYBsO7EtUZXdl37QYMACw1Gm877ndw3cItyJu5ula1JaVCtVBJuadKo4BAFlJUGx9bd1Sc7a2UY9WlK8nfxIcYe2nAaTpvyeZEaSHEOLM4tTB3hPrd+nd2yP6JdD3Yivi12QNVpGxYnnU5D7PjbceizKnT1uyvEV01kiIiJeaYiIgCIiAIiIAiIgCIiAIiIAiIgGrj8Itam9F/ZdSp56jeOvjOJY3Cvh6r0KntI1jyPEMOoix753eU7p70aOJQV6IvWpjcN9RN+z+UNSO0jiLVVYXV0bOGq5HZ7n/BzkGfGmtTrcJmBmsmb5qVcYnpUos6UywJDVG2V0tpfnrN2v0frEXARxwKv8RKt0ywDMoqqL7F7gcjx8pWcBXqIL02dPyHZfcZbFRa1KW6me0fI6MvR6vxVV7W+AM06rBKnovSU6jWuQjbWzbg3LfKVisXUYeu7uOTOze8yY6L4U7JqkWB9VevUXPZpbxkSUUtCVnzbXkWVGmZZrqJnpamYFpKZThyzAAXJIAHMncJ2DKcEKNJafEC7Hmx3n+uUrPQbIiijEVBYkfNg8Afpnu3f7S5zZpxsrnPxFTM7IRESw1xERAEREAREQBERAEREAREQBERAEREAREQCldMehQxBbEYeyVt7LuSr2/Vfr3HjzHMwWRmRwVZSVYHeCDYg98787gC5IA5k2E4f042fw7EGmQwLKbggg3RSdR1kyirFbzdw1ST2HwMGhkdUyWjcsF2Sd9t3bbdMaYy2h0ntsaOcpdzcjKzumYfxNRvcrtW4E6d4G+bmnDSabYsc55GKEJNkznfVskEW+6dH6I9CtjZr4oXbetPeByNTmfs+PIU3ooFNWmWsBtrckgAC4ub8O2drpVVYXVgw5ggjyl9OK3mliKjWyjJERLjSEREAREQBERAEREAREQBERAEREAREQBETXxeJWkj1HNlRSxPUPvghtLVmhn2dU8LT231Y3CKDYsfuHM/7TneZ9KMZWvasaIO5UAW36e/zmjnGaPiazVn46KOCgbgP63kzAonXpYWNOO0rv3oeerY+Vaey2o93df6v7buOpEZi9cnaLlzzZmv46zTeva21v0vobXk/Vp3kbisNJrYeNeNpN8vbLMNjp4aTlFJ3439GiLqMG4iaVSjyPnPOc1koi51Y+yBvPwHXIU5rU4ADtuZyMThVSdlK/n9j0eD6Q6+N5Rt/KfqS/o+vzmeiQOMr4zOpxAPiJL5NiErXFtlxvUm+nMHiJjhsN1srOSXqTi8cqEM0Yt/xb19+BZctxyqCDfUEaAnfMWAWuCCG2DzUtfxFrTJhcMJK0ac7FHDRop5W9TzuJx0sS1mSVuBLZTn+NpWvXZxyezg9V21HdadB6OZ6uKUgjYqKPWW9x2g8urh5nmKTdwGIam61ENmU3B+49XCRVoRmtFZldHFzpy1ba70/T6r3xXX4mlleOWvSWqulxqORG8eM3ZymmnZnfjJSSa3CIiQSIiIAiIgCIiAIiIAiIgCIiAJoZxl64ijUosSocbxvBBBU9eoGk2q1VUUuxCqBckmwAHEmc96S9KWrbVKgStPcW1DP8B1bz5S6hSnOWzpbv4GrisRSpQtPW+luP/Pr66FPxxFGu+HaojshttK11PwPMcDNimbyMzHKgwuNDNPB5g1I7FTUc/jO5vR5twSeaK04b7ffzJ9xIfO8wShTNR+wDix4KJIV8WoTbuLWvfhac7zuo+KqFtyi4QchzPWZVNyjF5d/cX4ekqk9p2it5r4JGxNRq1Q3PDkOQHVN2pl4mLJroSjCxkrUqTgTbvqerppKKUdxGrl81MywxpFatMlWBuCJMHECaGZPtC39dgkReuhMkmrMtXR3NlxCBtziwdeR5jqPD+Un6c5nlSVMO4qjfxHAqd6mdCwWMVlDg6EX/AJHrnfpuTis288riacaU9jsvd9PoSE+piFDKhdVLEAbTbKi/FjwXrkHjc412KXrNz+iOzmZlyvL9dtztMd5MzaKku9nbcgy4YeiE2tsk7TEeySQB6vVYCSk5t0d6QPh7I13pfV4r1qfu3dm+dBweKSqgqU2DKdxHuPI9U49elKErvW/ed/CYinUjlhpbu9717djYiIlBtiIiAIiIAiIgCIiAIiIAmOrUCgsxAABJJNgAN5J5TJOfdOs+2icLTOin50jiR9HsHHr7NbaNJ1ZZV7Rr4rExw9NzlyXF8PuaPSjpEcS2whIoqdBuLkfSPVy+O6DUTGs9gztRgoLLHceWlUlVk5zd2z0wkXj8GGEkzPDCSmZqRUsRgz7OtuVzbwnrB5f1Sw1sMDPKULTK5k6j3ENjslWoPqsNzDf2HmJXcdha9MhCA172IO+2+X/ZkBjDt135IAg7d58zbunPx0IZMzWu73yOp0XVqupkvs2v+OZVKOHrs4RV1IvvFtJZcsyHY9eodt/IdnxnxhsNTf6ret2HQ+UsYEwwEISTlbVMs6VrVYSUU9lr8kDisDNalhT7Ivblc28JZKlK8+UsMBOnc5CqM1stwAXhJqlpMKLaZVMwZDnc2EaTGRZu+Ge49ZD7a8+scjIJWmam8xlFSVnuEJuMlKLs0ddwuIWoiuh2lYXBmec+6L5x6B9hz8051+y3Ps5/ynQZx61J05WPR4XEKtC/f3r33PuEREqNkREQBERAEREARE8OwAJJsBqTygEF0tzr8Go+qfnHuE/ebu95E5XeSPSTNjia71Po7qY5KN3jr4yMBndw1HqoWe97/tyPI47FfEVbrsrRer5+VjMDPoMxAz1eWs14mW8+FpjvPJaYlp6JnwmeCZ5LTKxFxUewJPDWVzANcM53sxY95vJTOa1qT9a7H62n3yLo6KBOV0jLWMefp9zv9DQ2Zz+qX7a+qPeI1W0l8vr7VNTx2bHtGh8xINm0m3klb1WXk/kRf37Uw6Plao48V5FvS8L0VLg/PT7EyWmrjsRso9t+y1vCb3R7ApicUyVS5SnR9Jsio6hmZrDaKkEiynSSGfZJZ9mlgkq09ka7ZvfiDtuDNmvjVTk45W7e+DNTBdFvERjLOo3113ad172uV7JcWGpLbcLgd2gkkKk+4TKaqWVcuQC/F1trzPpLyfz7IMN+D1GWkEZVLAqX4akanlea9HHKNNRy7klw9DdxvRDdVz62O029m0reNpfkgg8yo8puUelFVNpHAubkkW3HrlqR50KNSU1eUcvvwRw8VQjRklGalpvX5ZJUnl96IZr6RPQsfWQer1r/AC3dlpzmk8lMtxjUnSou9Tft5g9RGkwr0s8bGeFrulNS7u/w96o6vEwYbELURai6hgCO+Z5xz0qd9wiIgCIiAIiIAmhnf93xH5qp+yYiZ0+2vEwn2X4PyOKiexET0bPDRPSz6IiYF6PJgxEgk8TyYiSCJz/+zH5a+4zTO4T5E4vSHzeSPUdEf2/N+hjmXJPbq/ofvREwwPz48/JlvSX9rLl/si3dB/73X/8Azp/qvL3ETLF/OkY4H5EPD1Amjn392r/m3/ZMRNZ7jbW9HP6U2kiJ6R7zxa3I2Kc3KERK5FkN50nol/dafa/7bSaiJxKvzJeL8z0+G+TD9K8hERKy8REQD//Z'/>
                    </ListItemAvatar>
                    <ListItemText
                    // secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`} 
                    primary={item.fullName}/>
                  </ListItem>
                  </div> 
                  <div>
                    <Button onClick={()=>handleAssignTask(item)} className='customButton'>select</Button>
                  </div>
              </div>

                 {index!== tasks.length-1 &&  <Divider variant='inset'/>}
            </>
              
            )
          }
          
        </Box>
      </Modal>
    </div>
  );
}
