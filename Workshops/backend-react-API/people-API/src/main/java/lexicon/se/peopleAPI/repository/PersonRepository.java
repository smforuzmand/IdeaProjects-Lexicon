package lexicon.se.peopleAPI.repository;

import lexicon.se.peopleAPI.model.entity.Person;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PersonRepository extends CrudRepository<Person,Integer> {


    List<Person> findAll();

    Optional<Person> findByEmail(String email);
}
