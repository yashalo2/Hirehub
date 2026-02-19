package com.yasin.hirehubBack.repository;

import com.yasin.hirehubBack.model.Seeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeekerRepository extends JpaRepository<Seeker, Long> {
    Seeker findById(long id);
    Seeker findByUserId(long user_id);
}
