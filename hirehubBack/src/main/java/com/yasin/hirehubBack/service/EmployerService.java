package com.yasin.hirehubBack.service;

import com.yasin.hirehubBack.model.Employer;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.EmployerRepository;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {
    @Autowired
    private EmployerRepository employerRepository;
    private UserRepository userRepository;
    public Optional<Employer> searchCompany(String companyName) {
        return employerRepository.findByCompanyName(companyName);
    }
    public Employer saveEmployer(Employer employer){
        return employerRepository.save(employer);
    }
    public Employer createEmployer(long id , Employer employer){
        User user = userRepository.findById(id);
        employer.setUser(user);
        return employerRepository.save(employer);
    }
}
