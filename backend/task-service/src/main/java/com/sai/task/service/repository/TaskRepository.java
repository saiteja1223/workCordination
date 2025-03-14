package com.sai.task.service.repository;

import com.sai.task.service.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {
    public List<Task> findByAssignedUserId(Long userId);
}
