package com.project.MasnaSzama.Model.Request;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Person.Admin;
import jdk.jfr.BooleanFlag;
import org.hibernate.type.StringType;
import org.hibernate.type.descriptor.sql.LongVarcharTypeDescriptor;
import org.hibernate.type.descriptor.sql.SmallIntTypeDescriptor;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Request {
    @Id
    private Long requestId;
    private Date requestDate;
    private String requestCommentary;
    private Integer requestStatus;

    @ManyToOne
    @JoinColumn (name= "admin_id", nullable=false)
    private Admin admin;

    @OneToOne
    @JoinColumn(name = "meal_id", nullable = false)
    private Meal meal;

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public String getRequestCommentary() {
        return requestCommentary;
    }

    public void setRequestCommentary(String requestCommentary) {
        this.requestCommentary = requestCommentary;
    }

    public Integer getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(Integer requestStatus) {
        this.requestStatus = requestStatus;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }
}
