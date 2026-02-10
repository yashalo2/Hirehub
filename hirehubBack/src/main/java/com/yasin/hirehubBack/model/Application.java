package com.yasin.hirehubBack.model;
import java.time.LocalDate;
import jakarta.persistence.*;
@Entity
@Table(name="Application")
public class Application {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @ManyToOne @JoinColumn(name="user_id", referencedColumnName="id")
    private User applicant;
    @ManyToOne @JoinColumn(name="job_posting_id", referencedColumnName="id")
    private Job jobPosting; @Column(nullable=false)
    private LocalDate appliedAt; @Column(length=50)
    private String status;
}
