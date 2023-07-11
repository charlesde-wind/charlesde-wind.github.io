package com.charlesdewind.main.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "AboutMe")
public record AboutMe (@Field("id")Long id, String bio, String name) {}
