package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.Employer;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.EmployerRepository;
import com.yasin.hirehubBack.service.EmployerService;
import jakarta.servlet.http.HttpSession;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/employer")
public class EmployerController {
    @Autowired
    private EmployerService employerService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmployerRepository employerRepository;

    @PostMapping("/profileDetail")
    public ResponseEntity<String> employerProfile(@RequestBody Employer employer, HttpSession session){
        String email = (String) session.getAttribute("email");
        if(email == null){
            return ResponseEntity.badRequest().body("Please login");
        }
        User user = userRepository.findByEmail(email);
//        if(employerRepository.existingUser(user)){
//            return ResponseEntity.badRequest().body("User already exists");
//        }
        if(user.getRole().toString().equals("Employer")){
            employer.setUser(user);
            employerRepository.save(employer);
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.ok("User Not Authorized!");

    }
    @GetMapping("/getEmployer")
    public List<Employer> getEmployer(){
        return employerRepository.findAll();
    }
}
