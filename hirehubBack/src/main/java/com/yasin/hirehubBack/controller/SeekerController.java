package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.Seeker;
import com.yasin.hirehubBack.service.SeekerService;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("api/seeker")
public class SeekerController {
    private SeekerService seekerService;

    @PostMapping("/profileEnhancing")
    public Optional<String> profileEnhancing(@RequestBody Seeker seeker, HttpSession session){
        String email = (String) session.getAttribute("email");
        String role = (String) session.getAttribute("role");
        if(email == null || role == null){
            return Optional.of("User Not Logged in");
        }
        if(role.equals("Seeker")){
            seekerService.saveSeeker(email,seeker);
            return Optional.of("Profile Modified!");
        }
        return Optional.of("error occured");



    }
}
