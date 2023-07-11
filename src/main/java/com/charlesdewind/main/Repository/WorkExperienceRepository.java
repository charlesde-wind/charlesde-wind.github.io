package com.charlesdewind.main.Repository;

import com.charlesdewind.main.Models.WorkExperience;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface WorkExperienceRepository extends MongoRepository<WorkExperience, String> {

    @Override
    @Query("{}")
    List<WorkExperience> findAll();
}
