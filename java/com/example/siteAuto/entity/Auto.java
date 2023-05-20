package com.example.siteAuto.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Auto {
    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String mark;
    private String image;
    private String model;
    private String generation;
    private String description;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "auto")
    private List<Review> reviews;


}
