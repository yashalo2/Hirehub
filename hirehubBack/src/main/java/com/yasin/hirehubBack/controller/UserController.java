package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@ModelAttribute User user) {
        userService.saveUser(user);
        return ResponseEntity.ok().body("User Registered Successfully");
    }
}
