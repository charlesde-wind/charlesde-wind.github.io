package com.charlesdewind.main.Controller;

import com.charlesdewind.main.Models.AboutMe;
import com.charlesdewind.main.Models.Certifications;
import com.charlesdewind.main.Models.Education;
import com.charlesdewind.main.Models.WorkExperience;
import com.charlesdewind.main.Repository.AboutMeRepository;
import com.charlesdewind.main.Repository.CertificationsRepository;
import com.charlesdewind.main.Repository.EducationRepository;
import com.charlesdewind.main.Repository.WorkExperienceRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "${frontend.server}")
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class MainController {

    private AboutMeRepository aboutMeRepository;
    private CertificationsRepository certificationsRepository;
    private EducationRepository educationRepository;
    private WorkExperienceRepository workExperienceRepository;

    @GetMapping("/jobs")
    public List<WorkExperience> getJobs() {
        return workExperienceRepository.findAll();
    }

    @GetMapping("/certifications")
    public List<Certifications> getCertifications() {
        return certificationsRepository.findAll();
    }

    @GetMapping("/education")
    public List<Education> getEducation() {
        return educationRepository.findAll();
    }

    @GetMapping("/about-me")
    public List<AboutMe> getAboutMe() {
        return aboutMeRepository.findAll();
    }
}
