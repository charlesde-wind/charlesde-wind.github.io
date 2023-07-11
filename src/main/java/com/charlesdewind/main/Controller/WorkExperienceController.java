package com.charlesdewind.main.Controller;

import com.charlesdewind.main.Models.WorkExperience;
import com.charlesdewind.main.Repository.WorkExperienceRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
public class WorkExperienceController {

    private WorkExperienceRepository workExperienceRepository;

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
                        ),
                        new WorkExperience(
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
