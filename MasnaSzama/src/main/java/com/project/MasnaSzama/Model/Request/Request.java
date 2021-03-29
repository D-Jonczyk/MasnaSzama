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
    Date requestDate;
    StringType requestCommentary;
    Integer requestStatus;

    @ManyToOne
    @JoinColumn (name= "admin_id", nullable=false)
    private Admin admin;

    @OneToOne
    @JoinColumn(name = "meal_id", nullable = false)
    private Meal meal;
}
