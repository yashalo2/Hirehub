package com.yasin.hirehubBack.service;

import com.yasin.hirehubBack.model.Seeker;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.SeekerRepository;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeekerService {
    @Autowired
    private SeekerRepository seekerRepository;
    private UserRepository userRepository;
    public Seeker saveSeeker(String email,Seeker seeker){
        User user = userRepository.findByEmail(email);
        seeker.setUser(user);
        return seekerRepository.save(seeker);



    }
}
