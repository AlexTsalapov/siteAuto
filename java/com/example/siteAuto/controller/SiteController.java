package com.example.siteAuto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SiteController {
    @GetMapping("/home")
    public String toHome() {
        return "mainPage";
    }

    @GetMapping("/country")
    public String toCountry() {
        return "countryPage";
    }

    @GetMapping("/mark")
    public String toMark() {
        return "markPage";
    }

    @GetMapping("/toSearch")
    public String toSearch() {
        return "searchPage";
    }

    @GetMapping("/model")
    public String toModel() {
        return "modelPage";
    }
}

