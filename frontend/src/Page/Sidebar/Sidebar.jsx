import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import avatarImage from "./download.jpeg";
import "./Sidebar.css";
import CreateTask from "../Task/CreateTask";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../ReduxToolKit/AuthSlice";


const menu = [
  { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_USER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_USER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_USER"] },
];




const Sidebar = () => {
  const {auth}=useSelector(store=>store)
  const role = auth.user.role;
 
  const dispatch=useDispatch();
  const location=useLocation();
    const navigate=useNavigate();
  const [activeMenu, setActiveMenu] = useState("Home");

  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);
  const handleCloseCreateTaskForm = () =>{
    setOpenCreateTaskForm(false);
  }
  const handleOpenUpateTaskModel=()=>{
    setOpenCreateTaskForm(true)
  }
  const handleMenuChange = (item) =>{
    const updateParams= new URLSearchParams(location.search)
    console.log(updateParams);
    if(item.name=="Create New Task"){
      handleOpenUpateTaskModel()
    }
    else if(item.name=="Home"){
      updateParams.delete("filter")
      const queryString = updateParams.toString();
      const updatedPath= queryString ? `${location.pathname}?${queryString}`:location.pathname;
      navigate(updatedPath);
      console.log(updatedPath);
    }
    else{
      updateParams.set("filter",item.value)
      navigate(`${location.pathname}?${updateParams.toString()}`)
    }
    setActiveMenu(item.name)
  }
  const handleLogout=()=>{
    dispatch(logout())
    console.log("Handle logout")
  }

  return (
    <>
    <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            sx={{ width: "8rem", height: "8rem" }}
            className="border-2 border-[#c24dd0] "
            src={avatarImage}
          />
        </div>
        {menu
          .filter((item) => item.role.includes(role))
          .map((item) => <p  onClick={()=>handleMenuChange(item)}
              className={
                `py-3 px-5 rounded-full text-center cursor-pointer 
                ${activeMenu===item.name?"activeMenuItem":"menuItem"}`}>
              {item.name}
            </p>
          )}
          <Button onClick={handleLogout} sx={{padding:".7rem", borderRadius:"2rem"}}fullWidth className="logoutButton">
            logout
          </Button>
      </div>
    </div>
    <CreateTask open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm}/>
    </>
  );
};

export default Sidebar;
