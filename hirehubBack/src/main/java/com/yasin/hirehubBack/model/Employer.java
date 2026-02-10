package com.yasin.hirehubBack.model;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name="Employer")
public class Employer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false, unique=true, length=100)
    private String name;
    @Column(length=255)
    private String description;
    @Column(length=100)
    private String website;
    @OneToOne @JoinColumn(name="owner_id", referencedColumnName="id")
    private User owner; // Employer user
    @OneToMany(mappedBy="company", cascade=CascadeType.ALL)
    private List<Job> jobs;
}
