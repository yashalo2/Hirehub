package com.yasin.hirehubBack.model;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name="Application")
public class Application {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name="job_id")
    private Job job;
    @ManyToOne
    @JoinColumn(name="seeker_id")
    private Seeker candidate;
    private Instant created;
    @PrePersist
    public void prePersist() {
        created = Instant.now();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Seeker getCandidate() {
        return candidate;
    }

    public void setCandidate(Seeker candidate) {
        this.candidate = candidate;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }
}
