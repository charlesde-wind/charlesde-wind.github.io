package com.charlesdewind.main.Models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("WorkExperience")
public class WorkExperience {

    @Id
    private String id;

    private @Getter @Setter String jobRole;

    private @Getter @Setter String jobResponsibilities;

    private @Getter @Setter Date startDate;

    private @Getter @Setter Date endDate;

    private @Getter @Setter String location;

    private @Getter @Setter String[] tags;


    public WorkExperience(String id, String jobRole, String jobResponsibilities, Date startDate, Date endDate, String location, String[] tags) {
        this.id = id;
        this.jobRole = jobRole;
        this.jobResponsibilities = jobResponsibilities;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.tags = tags;
    }

}
