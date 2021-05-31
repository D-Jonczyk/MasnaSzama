package com.project.MasnaSzama.auth;

import com.project.MasnaSzama.Model.Person.Person;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String firstName;
    private final String lastName;
    private final String userName;
    private final String emailAddress;
    private final String userPassword;
    private final Person person;
}
