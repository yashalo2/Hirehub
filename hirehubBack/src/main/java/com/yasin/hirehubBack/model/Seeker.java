package com.yasin.hirehubBack.model;
import jakarta.persistence.*;

@Entity
@Table(name="Seeker")
public class Seeker {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(length=2000)
    private String Skill;
    private String resume;
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User user;
    @Enumerated(EnumType.STRING)
    private SeekerStatus status;
    @PrePersist
    public void prePersist() {
        status = SeekerStatus.Open;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSkill() {
        return Skill;
    }

    public void setSkill(String skill) {
        Skill = skill;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public SeekerStatus getStatus() {
        return status;
    }

    public void setStatus(SeekerStatus status) {
        this.status = status;
    }
}
