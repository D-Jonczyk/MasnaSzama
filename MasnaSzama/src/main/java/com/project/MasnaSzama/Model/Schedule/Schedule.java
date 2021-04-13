package com.project.MasnaSzama.Model.Schedule;

import com.project.MasnaSzama.Model.Person.Coordinator;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.Person.Employee.Employee;
import com.project.MasnaSzama.Model.Request.Request;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long scheduleId;

    @ManyToOne
    @JoinColumn (name= "person_id", nullable=false)
    private Coordinator coordinator;

    @ManyToMany(mappedBy = "schedules")
    private Set<Employee> employees = new HashSet<>();

    private String dateCreated = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String startTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String endTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
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

    public Set<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
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
}
