package com.project.MasnaSzama.Model.Views;


import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Immutable
public class CourierSchedules {
    @Id
    private Long scheduleId;

    private String startTime = new java.text.SimpleDateFormat("HH:mm:ss").format(new java.util.Date());
    private String endTime = new java.text.SimpleDateFormat("HH:mm:ss").format(new java.util.Date());
    private String fullDate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private Long courierId;
    private Integer weekNumber;

    public CourierSchedules(Long scheduleId, String startTime, String endTime, String fullDate, Long courierId) {
        this.scheduleId = scheduleId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.fullDate = fullDate;
        this.courierId = courierId;
    }

    public CourierSchedules() {

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

    public String getFullDate() {
        return fullDate;
    }

    public void setFullDate(String fullDate) {
        this.fullDate = fullDate;
    }
}
