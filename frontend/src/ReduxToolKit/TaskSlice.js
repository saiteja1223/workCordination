import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";

export const fetchTasks=createAsyncThunk("task/fetchTasks",
async({status})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.get("/api/tasks",{
            params:{status}
        });
        console.log("fetch tasks : ", data)
        return data;
    }
    catch(error){
        throw Error(error.response.data.error)
    }
})

export const fetchUsersTask=createAsyncThunk("task/fetchUsersTask",
async({status})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.get("/api/tasks/user",{params:{status},});
        console.log("fetch users tasks : ", data)
        return data;
    }
    catch(error){
        throw Error(error.response.data.error)
    }
})


export const fetchTaskById=createAsyncThunk("task/fetchTaskById",
async(taskId)=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.get(`/api/tasks/${taskId}`);
        console.log("fetch tasks by id : ", data)
        return data;
    }
    catch(error){
        throw Error(error.response.data.error)
    }
})



export const createTask=createAsyncThunk("task/createTask",
async(taskData)=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.post("/api/tasks",taskData);
        console.log("created task: ", data)
        return data;
    }
    catch(error){
        console.log("error is this sssasasa",error)
        throw Error(error.response.data.error)
    }
})



export const updateTask=createAsyncThunk("task/updateTask",
async({id,updatedTaskdata})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.put(`/api/tasks/${id}`,updatedTaskdata);
        console.log("updated task: ", data)
        return data;
    }
    catch(error){
        throw Error("error : updatetask error ",error.response.data.error)
    }
})


export const assignTaskToUser=createAsyncThunk("task/assignTaskToUser",
async({taskId,userId})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.put(`/api/tasks/${taskId}/user/${userId}/assigned`);
        console.log("assigned task: ", data)
        return data;
    }
    catch(error){
        throw Error("error is : assignTaskToUser error ",error.response.data.error)
    }
})


export const deleteTask=createAsyncThunk("task/deleteTask",
async(taskId)=>{
    setAuthHeader(localStorage.getItem("jwt"),api)
    try{
        const {data}=await api.delete(`/api/tasks/${taskId}`);
        console.log("task deleted successfully",data)
        return taskId;
    }
    catch(error){
        console.log("error",error)
        throw Error(error.response.data.error)
    }
})

const taskSlice=createSlice({
    name:"task",
    initialState:{
        tasks:[],
        loading:false,
        error:null,
        taskDetails:null,
        usersTask:[]
    },
    reducer:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTasks.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchTasks.fulfilled,(state,action)=>{
            state.loading=false;
            state.tasks=action.payload
        })
        .addCase(fetchTasks.rejected,(state,action)=>{
            state.error=action.error.message;
            state.loading=false;
        })

        .addCase(fetchUsersTask.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUsersTask.fulfilled,(state,action)=>{
            state.loading=false;
            state.usersTask=action.payload
        })
        .addCase(fetchUsersTask.rejected,(state,action)=>{
            state.error=action.error.message;
            state.loading=false;
        })
        
        .addCase(fetchTaskById.fulfilled,(state,action)=>{
            state.loading=false;
            state.taskDetails=action.payload
        })

        .addCase(createTask.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(createTask.fulfilled,(state,action)=>{
            state.loading=false;
            state.tasks.push(action.payload)
        })
        .addCase(createTask.rejected,(state,action)=>{
            state.error=action.error.message;
            state.loading=false;
        })
        .addCase(updateTask.fulfilled,(state,action)=>{
            const updatedTask=action.payload
            state.loading=false;
            state.tasks=state.tasks.map((task)=>
            task.id === updatedTask.id?{ ...task, ...updatedTask} : task);
        })
        .addCase(assignTaskToUser.fulfilled,(state,action)=>{
            const updatedTask=action.payload
            state.loading=false;
            state.tasks=state.tasks.map((task)=>
            task.id === updatedTask.id?{...task, ...updatedTask} : task);
        })
        .addCase(deleteTask.fulfilled,(state,action)=>{
            state.loading=false;
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload)
        })
}
})
export default taskSlice.reducer;