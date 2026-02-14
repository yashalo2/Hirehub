package com.yasin.hirehubBack.service;

import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;
    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
