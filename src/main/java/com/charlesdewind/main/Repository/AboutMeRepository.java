package com.charlesdewind.main.Repository;

import com.charlesdewind.main.Models.AboutMe;
import com.charlesdewind.main.Models.WorkExperience;
import lombok.NonNull;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AboutMeRepository extends MongoRepository<AboutMe, String> {

    @Override
    @NonNull
    List<AboutMe> findAll();
}
