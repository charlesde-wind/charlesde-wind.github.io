package com.charlesdewind.main.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Certifications")
public record Certifications (
        @Id String id,
        String nameOfAuthority,
        String certificateDate,
        String nameOfCertificate
){
}
