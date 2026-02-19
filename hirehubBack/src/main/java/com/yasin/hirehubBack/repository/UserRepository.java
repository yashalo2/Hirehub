package com.yasin.hirehubBack.repository;

import com.yasin.hirehubBack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findUserByEmail(String email);
    boolean existsByEmail(String email);
    User findByEmail(String email);
    User findById(long id);
}
