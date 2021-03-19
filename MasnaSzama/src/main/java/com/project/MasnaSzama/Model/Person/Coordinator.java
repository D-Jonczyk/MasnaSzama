package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.Schedule.Schedule;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Coordinator extends Person{

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "Schedule",
            joinColumns = { @JoinColumn(name = "person_id") },
            inverseJoinColumns = { @JoinColumn(name = "schedule_id") }
    )
    Set<Schedule> schedules = new HashSet<>();
}



