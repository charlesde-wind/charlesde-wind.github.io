package com.charlesdewind.main.Controller;

import com.charlesdewind.main.Models.WorkExperience;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class WorkExperienceController {

    @GetMapping("/jobs")
    public List<WorkExperience> getJobs() {
        return
                List.of(new WorkExperience(
                        "1",
                "senior",
                "w3j904",
                new Date(),
                new Date(),
                "birmingham",
                null
                ));
    }


}
