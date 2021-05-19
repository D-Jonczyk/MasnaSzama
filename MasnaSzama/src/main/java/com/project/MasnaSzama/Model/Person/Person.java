package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.User.UserAccount;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Person implements Serializable {

    public Person() {

    }

   // @GeneratedValue(strategy= GenerationType.AUTO)
    @Id
    @Column(nullable = false)
    protected Long personId;

    @Column(nullable = false)
    protected String emailAddress;
    @Column(nullable = false)
    protected String firstName;
    protected String lastName;
    @Column(nullable = false)
    protected Long phoneNumber;

    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    protected UserAccount userAccount;

    public Long getPersonId() {
        return personId;
    }
    public void setPersonId(Long personId) {
        this.personId = personId;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public Long getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getEmailAddress() {
        return emailAddress;
    }
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
