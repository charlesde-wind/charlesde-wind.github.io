package com.charlesdewind.main.Repository;

import com.charlesdewind.main.Models.Certifications;
import com.charlesdewind.main.Models.WorkExperience;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CertificationsRepository extends MongoRepository<Certifications, String> {

    @Override
    @Query("{}")
    List<Certifications> findAll();
}
