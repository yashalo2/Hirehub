package com.yasin.hirehubBack.service;

import com.yasin.hirehubBack.model.Employer;
import com.yasin.hirehubBack.model.Job;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.EmployerRepository;
import com.yasin.hirehubBack.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private EmployerRepository employerRepository;

    public Job postJob(User user, Job job){
        if(employerRepository.existsById(user.getId())) {
            Employer employer = employerRepository.findByUserId(user.getId());
            job.setEmployer(employer);
             return jobRepository.save(job);
        }
        return null;
    }
}
