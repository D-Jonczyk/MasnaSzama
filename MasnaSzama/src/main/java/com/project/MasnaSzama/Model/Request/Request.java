package com.project.MasnaSzama.Model.Request;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Person.Admin;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Request {
    @Id
    private Long requestId;
    Date requestDate;
    String requestCommentary;
    Boolean requestStatus;

    @ManyToOne
    @JoinColumn (name= "admin_id", nullable=false)
    private Admin admin;

    @OneToOne
    @JoinColumn(name = "meal_id", nullable = false)
    private Meal meal;
}
