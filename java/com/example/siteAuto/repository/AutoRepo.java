package com.example.siteAuto.repository;

import com.example.siteAuto.entity.Auto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AutoRepo extends JpaRepository<Auto,Integer> {
    List<Auto> findAllByMark(String mark);
    List<Auto> findAllByModelContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String model,String description);
    Auto findAutoByModel(String model);
    Auto findAutoById(int id);
}
