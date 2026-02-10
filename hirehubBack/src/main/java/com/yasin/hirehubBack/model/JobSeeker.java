package com.yasin.hirehubBack.model;

import jakarta.persistence.*;

@Entity
@Table(name="jobSeeker")
public class JobSeeker {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private String firstName;
    private String lastName;
    private String resume;
    @OneToOne @JoinColumn(name="user_id", referencedColumnName="id")
    private User user; @Column(length=255)
    private String headline;
    @Column(length=1000)
    private String skills;
    @Column(length=255)
    private String resumeLink;
}
