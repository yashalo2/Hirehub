package com.yasin.hirehubBack.controller;

import com.yasin.hirehubBack.model.Employer;
import com.yasin.hirehubBack.model.Job;
import com.yasin.hirehubBack.model.JobStatus;
import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.EmployerRepository;
import com.yasin.hirehubBack.repository.JobRepository;
import com.yasin.hirehubBack.service.JobService;
import jakarta.servlet.http.HttpSession;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/job")
public class JobController {
    @Autowired
    private JobService jobService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private EmployerRepository employerRepository;

    @PostMapping("/postJob")
    public String postJob(@RequestBody Job job, HttpSession session){
        String email = (String) session.getAttribute("email");
        if(email == null){return "User Not Logged";}
        User user = userRepository.findByEmail(email);
        if(user.getRole().toString().equals("Employer")){
            job.setEmployer(employerRepository.findByUserId(user.getId()));
            jobRepository.save(job);
            return "Job Posted Successfully";
        }
        return "Error posing Job";


    }
    @PostMapping("/editJob")
    public String editJob(@RequestBody Job job, HttpSession session){
        String email = (String) session.getAttribute("email");
        if(email == null){return "User Not Logged";}
        User user = userRepository.findByEmail(email);
        if(user.getRole().toString().equals("Employer")){
            Job existingJob =jobRepository.findById(job.getId()).orElse(null);
            if(existingJob != null){
                existingJob.setTitle(job.getTitle());
                existingJob.setDescription(job.getDescription());
                existingJob.setSalary(job.getSalary());
                existingJob.setType(job.getType());
                existingJob.setTitle(job.getTitle());
                jobRepository.save(existingJob);
                return "Job Edited Successfully";
            }
            return "Post Not Found";
        }
        return "Error Editing Job";
    }
    @PostMapping("/updateJob")
    public String updateJob(@RequestBody long jobId, HttpSession session){
        String email = (String) session.getAttribute("email");
        if(email == null){return "User Not Logged";}
        User user = userRepository.findByEmail(email);
        if(user.getRole().toString().equals("Employer")){
            Job job = jobRepository.findById(jobId);
            job.setStatus(JobStatus.Closed);
            jobRepository.save(job);
            return "Job Updated Successfully";
        }
        return "Error updating Job";
    }
    @PostMapping("/getEmployer")
    public List<Job> getCompanyPost(@RequestBody Employer employer){
        Optional<Employer> owner = employerRepository.findById(employer.getEmployerId());
        List<Job> job = jobRepository.findByEmployer(owner);
        if(job != null){
            System.out.println("no job found");
            return job;
        }
        System.out.println("job found");
        return job;

    }
}
