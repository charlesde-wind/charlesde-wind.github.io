package com.charlesdewind.main.Models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("WorkExperience")
public record WorkExperience (
        @Id String id,
        String jobRole,
        String jobResponsibilities,
        Date startDate,
        Date endDate,
        String location,
        String[] tags){ }
