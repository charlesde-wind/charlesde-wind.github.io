package com.charlesdewind.main.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Education")
public record Education (
        @Id String id,
        String nameOfInstitution,
        String nameOfCourse,
        String startDate,
        String endDate,
        String gradesObtained,
        String location
){ }
