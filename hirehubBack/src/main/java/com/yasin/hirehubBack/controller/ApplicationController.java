package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.Application;
import com.yasin.hirehubBack.model.Job;
import com.yasin.hirehubBack.model.Seeker;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.JobRepository;
import com.yasin.hirehubBack.repository.SeekerRepository;
import com.yasin.hirehubBack.repository.UserRepository;
import com.yasin.hirehubBack.service.ApplicationService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/application")
public class ApplicationController {
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private SeekerRepository seekerRepository;
    private ApplicationService applicationService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/apply")
    public String createApplication(@RequestBody long jobId, HttpSession session) {
        String email = (String) session.getAttribute("email");
        if(email == null){
            return "User Not Logged in";

        }
        User user = userRepository.findByEmail(email);
        if(user.getRole().toString().equals("Seeker")){
            long seekerId = (long) session.getAttribute("seekerId");
            Application application = new Application();
            if(jobRepository.existsById(jobId)){
                applicationService.apply(jobId,seekerId,application);
                return "Job Application Successfully created";
            }
            return "Job Not Found";
            }

        return "error occured";




    }
}
