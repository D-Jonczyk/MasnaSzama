package com.project.MasnaSzama.Model.Schedule;

import com.project.MasnaSzama.Model.Person.Coordinator;
import com.project.MasnaSzama.Model.Person.Courier;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long scheduleId;

    @ManyToMany(mappedBy = "couriersSchedules")
    private Set<Courier> couriers = new HashSet<>();

    @ManyToMany(mappedBy = "coordinatorsSchedules")
    private Set<Coordinator> coordinators = new HashSet<>();

    private String dateCreated;
    private String startTime;
    private String endTime;
    private String otherDetails;

    public Schedule(){
        super();
    }

    public Schedule(String startTime){
        this.startTime = startTime;
    }

    public Long getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(Long scheduleId) {
        this.scheduleId = scheduleId;
    }

    public Set<Courier> getCouriers() {
        return couriers;
    }

    public void setCouriers(Set<Courier> couriers) {
        this.couriers = couriers;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getOtherDetails() {
        return otherDetails;
    }

    public void setOtherDetails(String otherDetails) {
        this.otherDetails = otherDetails;
    }

    public Set<Coordinator> getCoordinators() {
        return coordinators;
    }

    public void setCoordinators(Set<Coordinator> coordinators) {
        this.coordinators = coordinators;
    }
}
