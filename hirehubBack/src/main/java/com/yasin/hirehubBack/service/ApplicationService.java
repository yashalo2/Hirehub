package com.yasin.hirehubBack.service;

import com.yasin.hirehubBack.model.Application;
import com.yasin.hirehubBack.model.Job;
import com.yasin.hirehubBack.model.Seeker;
import com.yasin.hirehubBack.repository.ApplicationRepository;
import com.yasin.hirehubBack.repository.JobRepository;
import com.yasin.hirehubBack.repository.SeekerRepository;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private SeekerRepository seekerRepository;
    @Autowired
    private JobRepository jobRepository;
    public Application apply(long jobId,long seekerId,Application application) {
        Seeker seeker = seekerRepository.findById(seekerId);
        Job job = jobRepository.findById(jobId);
        application.setJob(job);
        application.setCandidate(seeker);
        return applicationRepository.save(application);



    }
}
