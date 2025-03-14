package com.sai.task.service.service;

import com.sai.task.service.model.Task;
import com.sai.task.service.model.TaskStatus;
import jakarta.ws.rs.core.Link;

import java.util.List;

public interface TaskService {
    Task createTask(Task task,String requesterRole)throws Exception;
    Task getTaskById(Long id) throws Exception;
    List<Task> getAllTask(TaskStatus status);
    Task updateTask(Long id,Task updatedTask,Long userId)throws Exception;
    void deleteTask(Long id);
    Task assignedToUser(Long userId,Long taskId)throws Exception;
    List<Task>assignedUsersTask(Long userId,TaskStatus status);
    Task completeTask(Long taskId)throws Exception;
}
