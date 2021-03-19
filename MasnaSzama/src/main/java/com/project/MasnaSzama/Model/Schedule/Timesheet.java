package com.project.MasnaSzama.Model.Schedule;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Timesheet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long timesheetId;

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

