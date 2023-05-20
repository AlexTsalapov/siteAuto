package com.example.siteAuto.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_Account")
public class User {
    @Id
    private String username;
    private String password;
    //@OneToMany(cascade = CascadeType.ALL,mappedBy = "user")
   // private List<Review> reviews;
}
