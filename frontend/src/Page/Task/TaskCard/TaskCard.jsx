import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTaskForm from "./EditTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../../ReduxToolKit/TaskSlice";
import { useLocation, useNavigate } from "react-router-dom";
import store from "../../../ReduxToolKit/Store";
import SubmitFormModel from "./SubmitFormModel";

const role="ROLE_ADMIN"

const TaskCard = ({item}) => {
  const dispatch=useDispatch();
  const location=useLocation();
  const navigate=useNavigate();
  const {auth}=useSelector(store=>store);
  const [anchorEl, setAnchorEl] = React.useState (null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);
  const handleCloseUserList = () =>{
    setOpenUserList(false);
  }
  const handleOpenUserList=()=>{
    const updateParams=new URLSearchParams(location.search);
    updateParams.set("taskId",item.id)
    navigate(`${location.pathname}?${updateParams.toString()}`)
    setOpenUserList(true);
    handleMenuClose()
  };

  const [openSubmitFormModel, setOpenSubmitFormModel] = useState(false);

  const handleCloseSubmitFormModel = () =>{
    setOpenSubmitFormModel(false);
  }
  const handleOpenSubmitFormModel=()=>{
    const updateParams=new URLSearchParams(location.search);
    updateParams.set("taskId",item.id)
    navigate(`${location.pathname}?${updateParams.toString()}`)
    setOpenSubmitFormModel(true);
    handleMenuClose()
  }

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleCloseSubmissionList = () =>{
    setOpenSubmissionList(false);
  }
  const handleOpenSubmissionList=()=>{
    const updateParams=new URLSearchParams(location.search);
    updateParams.set("taskId",item.id)
    navigate(`${location.pathname}?${updateParams.toString()}`)
    setOpenSubmissionList(true);
    handleMenuClose()
  }

  
const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);

  const handleCloseUpdateTaskForm = () =>{
    setOpenUpdateTaskForm(false);
  }

  const handleRemoveTaskIdParams=()=>{
    const updateParams=new URLSearchParams(location.search);
    updateParams.delete("filter")
      const queryString = updateParams.toString();
      const updatedPath= queryString ? `${location.pathname}?${queryString}`:location.pathname;
      navigate(updatedPath);
  }
  const handleOpenUpateTaskModel=()=>{
    const updateParams=new URLSearchParams(location.search);
    updateParams.set("taskId",item.id)
    navigate(`${location.pathname}?${updateParams.toString()}`)
    setOpenUpdateTaskForm(true)
    handleMenuClose()
  }

  const handleDeleteTask=()=>{ 
    dispatch(deleteTask(item.id))
    console.log("id",item.id)
    handleMenuClose()
  }

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w[70%]">
          <div className=" ">
            <img
              className="lg:w-[7rem] lg:h-[rem] object-cover"
              src={item.image}
              alt=""
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg"> {item.title}</h1>
              <p className="text-gray-500 text-sm">
                {item.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {item.tags.map((item) => (
                <span className="py-1 px-5 rounded-full techStack">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleMenuClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
                {
                    auth.user?.role==="ROLE_ADMIN"?(<>
            <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
            <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
            <MenuItem onClick={handleOpenUpateTaskModel}>Edit</MenuItem>
            <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                    </>
                    ):(
                    <>
                    <MenuItem onClick={handleOpenSubmitFormModel}>submit</MenuItem>
                    </>)
                }
          </Menu>
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList}/>
      <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
      <EditTaskForm item={item} open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
      <SubmitFormModel open={openSubmitFormModel} handleClose={handleCloseSubmitFormModel} />
    </div>
  );
};

export default TaskCard;
