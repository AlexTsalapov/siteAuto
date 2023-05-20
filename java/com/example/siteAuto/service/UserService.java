package com.example.siteAuto.service;

import com.example.siteAuto.dto.UserDetailsImpl;
import com.example.siteAuto.entity.User;
import com.example.siteAuto.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private UserRepo userRepo;

    public boolean registry(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        if (!userRepo.existsByUsername(user.getUsername())) {
            userRepo.save(user);
            return true;
        }
        return false;

    }
    public User findByUsername(String username){
        return userRepo.findUserByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findUserByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("Not found:");
        }

        return new UserDetailsImpl(user);
    }
}