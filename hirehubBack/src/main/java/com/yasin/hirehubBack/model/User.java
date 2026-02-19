package com.yasin.hirehubBack.model;
import jakarta.persistence.*;
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private Role role;
    private String profilePath;

    @PrePersist
    public void prePersist() {
        if(role == Role.Seeker)
        profilePath = "/uploads/seeker.jpg";
        else
        profilePath = "/uploads/employer.jpg";
    }
    public void setProfilePath(String profilePath) {
        this.profilePath = profilePath;
    }
    public String getProfilePath() {
        return profilePath;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
