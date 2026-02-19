package com.yasin.hirehubBack.model;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name="Jobs")
public class Job {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length=4000)
    private String description;
    private double salary;
    @ManyToOne
    @JoinColumn(name="employer_id")
    private Employer employer;
    @Enumerated(EnumType.STRING)
    private JobStatus status;
    @Enumerated(EnumType.STRING)
    private JobType type;
    private Instant created;

    @PrePersist
    public void prePersist() {
        created = Instant.now();
        if(status == null){
            status = JobStatus.Open;
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public Employer getEmployer() {
        return employer;
    }

    public void setEmployer(Employer employer) {
        this.employer = employer;
    }

    public JobStatus getStatus() {
        return status;
    }

    public void setStatus(JobStatus status) {
        this.status = status;
    }

    public JobType getType() {
        return type;
    }

    public void setType(JobType type) {
        this.type = type;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }
}
