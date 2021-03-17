package com.project.MasnaSzama.Model.User;

import com.project.MasnaSzama.Model.Person.Person;

import javax.persistence.*;

@Entity
public class UserAccount extends Person{
    private String userName;
    private String password;
    private String registeredDate;
    private String lastLogin;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(String registeredDate) {
        this.registeredDate = registeredDate;
    }

    public String getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(String lastLogin) {
        this.lastLogin = lastLogin;
    }
}
