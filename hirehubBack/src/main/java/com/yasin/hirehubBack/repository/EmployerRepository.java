package com.yasin.hirehubBack.repository;

import com.yasin.hirehubBack.model.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployerRepository extends JpaRepository<Employer,Long> {
    Optional<Employer> findByCompanyName(String companyName);
    boolean existsById(long employerId);
    Employer findByUserId(long user_id);
}
