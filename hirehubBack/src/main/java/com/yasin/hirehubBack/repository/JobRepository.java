package com.yasin.hirehubBack.repository;

import com.yasin.hirehubBack.model.Employer;
import com.yasin.hirehubBack.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    Job findById(long id);
    boolean existsById(long id);
    List<Job> findByEmployer(Optional<Employer> employer);

}
