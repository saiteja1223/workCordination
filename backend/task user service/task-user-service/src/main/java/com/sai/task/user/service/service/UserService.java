package com.sai.task.user.service.service;

import com.sai.task.user.service.model.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {


   public User getUserProfile(String jwt);
    public List<User> getAllUsers();
}
