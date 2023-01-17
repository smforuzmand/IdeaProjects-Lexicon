package lexicon.se.peopleAPI.model.dto;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
@ToString
public class PersonDto {

    private Integer Id;
    @NotEmpty(message = "firstName should not be empty")
    @Size(min = 2 , max = 40, message = "firstName should be between 2 and 40 characters")
    private String firstName;

    @NotEmpty(message = "lastName should not be empty")
    @Size(min = 2 , max = 40, message = "firstName should be between 2 and 40 characters")
    private String lastName;
    @NotEmpty(message = "email should not be empty")
    @Size(min = 2 , max = 40, message = "firstName should be between 2 and 40 characters")
    private String email;
    private String title;

}
