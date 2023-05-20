package com.example.siteAuto.service;

import com.example.siteAuto.entity.Auto;
import com.example.siteAuto.entity.Review;
import com.example.siteAuto.repository.AutoRepo;
import com.example.siteAuto.repository.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    private AutoRepo autoRepo;
    @Autowired
    private ReviewRepo reviewRepo;


    public void addReview(Review review, String model) {
        Auto auto = autoRepo.findAutoByModel(model);
        review.setAuto(auto);
        auto.getReviews().add(review);
        autoRepo.save(auto);
    }

    public void deleteReview(int id) {
        Review review = reviewRepo.findById(id);
        review.setAuto(null);
        reviewRepo.save(review);
        reviewRepo.delete(review);


    }
}
