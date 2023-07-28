package com.charlesdewind.main.Repository;

import com.charlesdewind.main.Models.WorkExperience;
import lombok.NonNull;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface WorkExperienceRepository extends MongoRepository<WorkExperience, String> {

    @Override
    @NonNull
    List<WorkExperience> findAll();
}
