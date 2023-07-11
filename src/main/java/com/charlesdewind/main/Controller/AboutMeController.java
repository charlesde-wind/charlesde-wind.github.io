package com.charlesdewind.main.Controller;

import com.charlesdewind.main.Models.AboutMe;
import com.charlesdewind.main.Models.WorkExperience;
import com.charlesdewind.main.Repository.AboutMeRepository;
import com.charlesdewind.main.Repository.WorkExperienceRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;


//@CrossOrigin(origins = "${frontend.server}")
@CrossOrigin(origins = "${frontend.server}")
@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class AboutMeController {

    private AboutMeRepository aboutMeRepository;

    @GetMapping("/about-me")
    public List<AboutMe> getAboutMe() {
        aboutMeRepository.findAll().forEach(System.out::println);
        return aboutMeRepository.findAll();
    }


}
