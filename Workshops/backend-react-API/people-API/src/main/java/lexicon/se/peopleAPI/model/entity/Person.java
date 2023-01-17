package lexicon.se.peopleAPI.model.entity;

import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;


@Setter
@Getter
@Entity
public class Person {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String title;

    public Person() {
    }

    public Person(Integer id, String firstName, String lastName, String email, String title) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.title = title;
    }

    public Person(String firstName, String lastName, String email, String title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.title = title;
    }
}