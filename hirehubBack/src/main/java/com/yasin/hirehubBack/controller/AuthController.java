package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("login")
public class AuthController {
    @Autowired
    UserRepository userRepository;
}
