package com.example.siteAuto.service;

import com.example.siteAuto.entity.Auto;
import com.example.siteAuto.repository.AutoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutoService {
    @Autowired
    private AutoRepo autoRepo;
    public List<Auto> findAllByMark(String mark){
       return autoRepo.findAllByMark(mark);
    }
    public void addAuto(Auto auto){
        autoRepo.save(auto);
    }
    public List<Auto> search(String search){
        return autoRepo.findAllByModelContainingIgnoreCaseOrDescriptionContainingIgnoreCase(search,search);
    }
    public void deleteAutoById(int id){
        autoRepo.deleteById(id);
    }
    public Auto findAutoByModel(String model){
        return autoRepo.findAutoByModel(model);
    }

}
