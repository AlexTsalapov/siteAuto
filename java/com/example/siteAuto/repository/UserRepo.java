package com.example.siteAuto.repository;

import com.example.siteAuto.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String> {
    User findUserByUsername(String username);

    boolean existsByUsername(String username);
}
