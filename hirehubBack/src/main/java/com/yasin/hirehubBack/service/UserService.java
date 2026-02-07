package com.yasin.hirehubBack.service;

import com.yasin.hirehubBack.model.User;
import com.yasin.hirehubBack.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    public UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    List<User> getAllUsers(){
        return this.userRepository.findAll();
    }
    Optional<User> findUserById(Long id){
        return userRepository.findById(id);
    }
    Optional<User> findUserByEmail(String email) {
       return userRepository.findByEmail(email);
    }
    public User saveUser(User user){
        return userRepository.save(user);
    }
    public Optional<User> updateUser(Long id, User updatedUser){
        return userRepository.findById(id)
                .map(user->{
                    user.setEmail(updatedUser.getEmail());
                    user.setPassword(updatedUser.getPassword());
                    user.setRole(updatedUser.getRole());
                    return userRepository.save(user);
                });
    }
}
