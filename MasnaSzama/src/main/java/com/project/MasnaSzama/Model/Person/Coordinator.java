package com.project.MasnaSzama.Model.Person;

import javax.persistence.*;

@Entity
public class Coordinator extends Person{

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "Schedule",
            joinColumns = { @JoinColumn(name = "person_id") },
            inverseJoinColumns = { @JoinColumn(name = "schedule_id") }
    )

}



