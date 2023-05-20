package com.example.siteAuto.controller;

import com.example.siteAuto.entity.Auto;
import com.example.siteAuto.service.AutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SiteRestController {
    @Autowired
    private AutoService autoService;
    @GetMapping("/listAuto")
    public ResponseEntity getList(@RequestParam String mark){
        return ResponseEntity.ok().body(autoService.findAllByMark(mark));
    }
    @DeleteMapping("/deleteAuto")
    public ResponseEntity deleteAuto(@RequestParam int id){
        try {
            autoService.deleteAutoById(id);
            return ResponseEntity.ok().build();
        }
        catch (Exception ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
    @PostMapping("/addAuto")
    public ResponseEntity setAuto(@RequestBody Auto auto)
    {
        try {
            autoService.addAuto(auto);
            return ResponseEntity.ok().build();
        }
        catch (Exception ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
    @GetMapping("/search")
    public ResponseEntity search(@RequestParam String search){
        return ResponseEntity.ok().body(autoService.search(search));
    }
    @GetMapping("/findModel")
    public ResponseEntity getModel(@RequestParam String model){
        return ResponseEntity.ok().body(autoService.findAutoByModel(model));
    }
}
