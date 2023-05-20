package com.example.siteAuto.controller;

import com.example.siteAuto.entity.Review;
import com.example.siteAuto.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/review")
public class ReviewRestController {
    @Autowired
    private  ReviewService reviewService;
    @PostMapping("/add")
    public ResponseEntity addReview(@RequestBody Review review, @RequestParam String model){
        try {
            reviewService.addReview(review,model);
            return ResponseEntity.ok().build();
        }
        catch (Exception exception){
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
    @DeleteMapping("/delete")
    public ResponseEntity deleteReview(@RequestParam int id){
        try {
            reviewService.deleteReview(id);
            return ResponseEntity.ok().build();
        }
        catch (Exception ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}
