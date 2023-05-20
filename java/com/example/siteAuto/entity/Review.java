package com.example.siteAuto.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
  //  @NotBlank
    private String username;
  //  @NotBlank
   // @Min(0)
   // @Max(5)
    private float grade;
  //  @NotBlank
    private String dignity;
   // @NotBlank
    private String flaws;
   // @NotBlank
    private String review;
    @ManyToOne()
    @JoinColumn(name = "auto_id")
    @JsonIgnore
    private Auto auto;
  //  @ManyToOne()
  //  @JoinColumn(name = "user_id")
  //  @JsonIgnore
  //  private User user;

}
