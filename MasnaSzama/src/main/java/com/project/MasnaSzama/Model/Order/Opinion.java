package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Person.Customer;

import javax.persistence.*;

@Entity
public class Opinion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long opinionId;

    @OneToOne(mappedBy="opinion")
    private OrdersMeals ordersMeals;

    private int rating;
    private String opinionComment;

    public Long getOpinionId() {
        return opinionId;
    }

    public void setOpinionId(Long opinionId) {
        this.opinionId = opinionId;
    }

    public OrdersMeals getOrdersMeals() {
        return ordersMeals;
    }

    public void setOrdersMeals(OrdersMeals ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getOpinionComment() {
        return opinionComment;
    }

    public void setOpinionComment(String opinionComment) {
        this.opinionComment = opinionComment;
    }
}
