package com.project.MasnaSzama.Model.Person;

import javax.persistence.Entity;

@Entity
public class Courier extends Person{
    String startingHour;

    public String getStartingHour() {
        return startingHour;
    }
    public void setStartingHour(String startingHour) {
        this.startingHour = startingHour;
    }
}
