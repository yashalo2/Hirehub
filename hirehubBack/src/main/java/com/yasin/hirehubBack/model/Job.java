package com.yasin.hirehubBack.model;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="Job")
public class Job {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @Column(nullable=false, length=150)
    private String title;
    @Column(nullable=false, length=1000)
    private String description; @Column(nullable=false, length=100)
    private String location; @Column(nullable=false)
    private LocalDate postedAt;
    @ManyToOne @JoinColumn(name="company_id", referencedColumnName="id")
    private Employer company; @OneToMany(mappedBy="jobPosting", cascade=CascadeType.ALL)
    private java.util.List<Application> applications;

}
