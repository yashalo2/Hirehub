package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.Employer;
import com.yasin.hirehubBack.model.Job;
import com.yasin.hirehubBack.model.Seeker;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.EmployerRepository;
import com.yasin.hirehubBack.repository.JobRepository;
import com.yasin.hirehubBack.repository.SeekerRepository;
import com.yasin.hirehubBack.repository.UserRepository;
import com.yasin.hirehubBack.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SeekerRepository seekerRepository;
    @Autowired
    private EmployerRepository employerRepository;
    @Autowired
    private JobRepository jobRepository;


    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@ModelAttribute User user) {
        if(userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userService.saveUser(user);
        Seeker seeker = new Seeker();
        seeker.setUser(user);
        seekerRepository.save(seeker);
        return ResponseEntity.ok().body("User Registered Successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@ModelAttribute User user,HttpSession session) {
        if(!userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Wrong credentials");
        }
        Optional<User> foundUser = userRepository.findUserByEmail(user.getEmail());
            if(foundUser != null && foundUser.get().getPassword().equals(user.getPassword())){
                session.setAttribute("userId", foundUser.get().getId());
                session.setAttribute("email", user.getEmail());
                session.setAttribute("role", foundUser.get().getRole());
                if(foundUser.get().getRole().equals("Seeker")) {
                    Seeker seeker = seekerRepository.findByUserId(foundUser.get().getId());
                    session.setAttribute("id", seeker.getId());
                }
                if(foundUser.get().getRole().equals("Employer")) {
                    Employer employer = employerRepository.findByUserId(foundUser.get().getId());
                    session.setAttribute("id", employer.getEmployerId());

                }
                return ResponseEntity.ok().body("User Logged Successfully");
            }


        return ResponseEntity.badRequest().body("Wrong Credentials");

    }
    @GetMapping("/home")
    public ResponseEntity<String> home(HttpSession session) {
        String email = (String) session.getAttribute("email");
        if(email == null) {
            return ResponseEntity.badRequest().body("No user logged in");
        }
        return ResponseEntity.ok().body(email);
    }
    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
         request.getSession().invalidate();
         return ResponseEntity.ok().body("Logout Successfully");

    }
    @GetMapping("/getUsers")
    public List<User> getUsers(HttpSession session) {
    String email = (String) session.getAttribute("email");
                if(userRepository.existsByEmail(email) ) {
                    User user=userRepository.findByEmail(email);
                    if(user.getRole().toString().equals("Employer"))
                    {
                        List<User> users = userRepository.findAll();
                        return users;
                    }

                }
        return null;

    }
    @GetMapping("/getJob")
    public List<Job> getJobs(HttpSession session) {
        return jobRepository.findAll();
    }

}
