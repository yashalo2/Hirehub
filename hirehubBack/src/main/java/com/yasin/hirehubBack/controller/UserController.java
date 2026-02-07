package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Hirehub")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepository.save(user);
        return "user registered";
    }
}
