package com.project.MasnaSzama.Model.Person.Employee;

import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Schedule.Schedule;
import com.project.MasnaSzama.Model.Schedule.Timesheet;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Courier extends Employee {
    Integer averageDeliveryTime;
    Integer numberOfDeliveries;

    @ManyToMany(mappedBy = "couriers")
    private Set<Order> orders = new HashSet<>();

    public Courier(){
        super();
    }

    public Courier(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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
