package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Schedule.Schedule;
import com.project.MasnaSzama.Model.Schedule.Timesheet;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Courier extends Person{
    Integer averageDeliveryTime;
    Integer numberOfDeliveries;

    @OneToMany(mappedBy = "courier")
    private Set<Order> orders;

    @ManyToMany(cascade = { CascadeType.ALL})
    @JoinTable(
            name = "couriers_schedules",
            joinColumns = { @JoinColumn(name = "person_id")},
            inverseJoinColumns = { @JoinColumn(name = "schedule_id")}
    )
    Set<Schedule> couriersSchedules = new HashSet<>();

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "couriers_timesheets",
            joinColumns = { @JoinColumn(name = "person_id")},
            inverseJoinColumns = { @JoinColumn(name = "timesheet_id")}
    )
    Set<Timesheet> timesheets = new HashSet<>();

    public Courier(){
        super();
    }

    public Courier(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Set<Timesheet> getTimesheets() {
        return timesheets;
    }

    public void setTimesheets(Set<Timesheet> timesheets) {
        this.timesheets = timesheets;
    }

    public Set<Schedule> getCouriersSchedules() {
        return couriersSchedules;
    }

    public void setCouriersSchedules(Set<Schedule> couriersSchedules){
        this.couriersSchedules = couriersSchedules;
    }

    public Integer getAverageDeliveryTime() {
        return averageDeliveryTime;
    }

    public void setAverageDeliveryTime(Integer averageDeliveryTime) {
        this.averageDeliveryTime = averageDeliveryTime;
    }

    public Integer getNumberOfDeliveries() {
        return numberOfDeliveries;
    }

    public void setNumberOfDeliveries(Integer numberOfDeliveries) {
        this.numberOfDeliveries = numberOfDeliveries;
    }
}
