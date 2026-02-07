package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if(userRepository.existsByEmail(user.getEmail())){
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userRepository.save(user);
        return ResponseEntity.ok().body("User Registered Successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<String> logi(@RequestBody User user, HttpSession session){
        Optional<User> userFound= userRepository.findByEmail(user.getEmail());
        if(userFound != null && userFound.get().getPassword().equals(user.getPassword())){
            session.setAttribute("userId", userFound.get().getId());
            session.setAttribute("email", user.getEmail());
            return ResponseEntity.ok().body("user Logged Successfully");
        }
        return ResponseEntity.badRequest().body("Invalid Credentials");
    }
    @GetMapping("/home")
    public ResponseEntity<String> home(HttpSession session){
        String info=(String) session.getAttribute("email");
        if(info==null){
            return ResponseEntity.badRequest().body("No user logged in");
        }
        return ResponseEntity.ok().body(info);
    }
}



