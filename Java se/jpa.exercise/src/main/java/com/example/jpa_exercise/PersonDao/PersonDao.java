package com.example.jpa_exercise.PersonDao;

import java.time.LocalDate;

public class PersonDao {
    private int id;
    private String Name;
    private LocalDate birthDate;


    public PersonDao() {
    }

    public PersonDao(int id, String name, LocalDate birthDate) {
        this.id = id;
        Name = name;
        this.birthDate = birthDate;
    }

    @Override
    public String toString() {
        return "PersonDao{" +
                "id=" + id +
                ", Name='" + Name + '\'' +
                ", birthDate=" + birthDate +
                '}';
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
