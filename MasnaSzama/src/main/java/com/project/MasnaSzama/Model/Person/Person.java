package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.User.UserAccount;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Person implements Serializable {

    @Id
    //@GeneratedValue
    @Column(nullable = false)
    protected Long personId;
    @Column(nullable = false)
    protected String firstName;
    protected String lastName;
    @Column(nullable = false)
    protected Long phoneNumber;

    @OneToOne(mappedBy = "person")
    private UserAccount userAccounts;

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

    public UserAccount getUserAccounts() {
        return userAccounts;
    }

    public void setUserAccounts(UserAccount userAccounts) {
        this.userAccounts = userAccounts;
    }
}

