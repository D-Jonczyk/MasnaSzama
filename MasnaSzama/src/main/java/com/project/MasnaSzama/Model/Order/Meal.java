package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Request.Request;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mealId;

    private String mealName;
    private BigDecimal price;

    @ManyToMany(mappedBy = "meal")
    private Set<Restaurant> restaurants;

    @OneToOne(mappedBy = "meal")
    private Request request;

    @OneToMany(mappedBy = "meal")
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    public Set<OrdersMeals> getOrdersMeals() {
        return ordersMeals;
    }

    public void setOrdersMeals(Set<OrdersMeals> ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

    public Long getMealId() {
        return mealId;
    }

    public String getMealName() {
        return mealName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setMealName(String mealName) {
        this.mealName = mealName;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

}
