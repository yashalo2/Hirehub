package com.yasin.hirehubBack.model;
import jakarta.persistence.*;
@Entity
@Table(name="Employer")
public class Employer {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long employerId;
    private String firstName;
    private String lastName;
    @OneToOne(fetch= FetchType.LAZY)
    @JoinColumn(name= "user_id")
    private User user;
    private String companyName;
    @Column(length=4000)
    private String companyDescription;
    private String website;
    private String social1;
    private String social2;
    private String social3;
    private String logo;

    public long getEmployerId() {
        return employerId;
    }

    public void setEmployerId(long employerId) {
        this.employerId = employerId;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyDescription() {
        return companyDescription;
    }

    public void setCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getSocial1() {
        return social1;
    }

    public void setSocial1(String social1) {
        this.social1 = social1;
    }

    public String getSocial2() {
        return social2;
    }

    public void setSocial2(String social2) {
        this.social2 = social2;
    }

    public String getSocial3() {
        return social3;
    }

    public void setSocial3(String social3) {
        this.social3 = social3;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }
}
