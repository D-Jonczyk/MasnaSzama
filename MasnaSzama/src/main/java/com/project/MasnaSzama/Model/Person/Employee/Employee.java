package com.project.MasnaSzama.Model.Person.Employee;

import com.project.MasnaSzama.Model.Person.Person;
import com.project.MasnaSzama.Model.Schedule.Schedule;
import com.project.MasnaSzama.Model.Schedule.Timesheet;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Employee extends Person {

    @ManyToMany(cascade = { CascadeType.ALL})
    @JoinTable(
            name = "employees_schedules",
            joinColumns = { @JoinColumn(name = "person_id")},
            inverseJoinColumns = { @JoinColumn(name = "schedule_id")}
    )
    Set<Schedule> schedules = new HashSet<>();

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "employees_timesheets",
            joinColumns = { @JoinColumn(name = "person_id")},
            inverseJoinColumns = { @JoinColumn(name = "timesheet_id")}
    )
    Set<Timesheet> timesheets = new HashSet<>();
}
