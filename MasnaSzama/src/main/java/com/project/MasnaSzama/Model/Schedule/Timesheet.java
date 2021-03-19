package com.project.MasnaSzama.Model.Schedule;

import com.project.MasnaSzama.Model.Person.Employee.Employee;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Timesheet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long timesheetId;

    @ManyToMany(mappedBy = "timesheets")
    private Set<Employee> employees = new HashSet<>();

    private String startTime;
    private String endTime;
    private String notes;

    public Long getTimesheetId() {
        return timesheetId;
    }

    public void setTimesheetId(Long timesheetId) {
        this.timesheetId = timesheetId;
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

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

