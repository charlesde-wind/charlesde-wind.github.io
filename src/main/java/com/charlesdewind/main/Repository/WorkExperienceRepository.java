package com.charlesdewind.main.Repository;

import com.charlesdewind.main.Models.WorkExperience;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkExperienceRepository extends MongoRepository<WorkExperience, String> {

}
