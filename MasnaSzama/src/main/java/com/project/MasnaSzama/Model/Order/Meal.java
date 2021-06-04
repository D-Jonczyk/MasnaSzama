package com.project.MasnaSzama.Model.Order;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.MasnaSzama.Model.Request.Request;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Meal {

    public Meal() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mealId;

    private String mealName;
    private BigDecimal price;

    @ManyToMany(mappedBy = "meal")
    private Set<Restaurant> restaurants;

//    @OneToOne(mappedBy = "meal")
//    private Request request;

    @OneToMany(mappedBy = "meal")
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    public Set<OrdersMeals> getOrdersMeals() {
        return ordersMeals;
    }

    public void setOrdersMeals(Set<OrdersMeals> ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

    @JsonProperty(value = "mealId")
    public Long getMealId() {
        return mealId;
    }

    @JsonProperty(value = "mealId")
    public void setMealId(Long mealId) {
        this.mealId = mealId;
    }

    @JsonProperty(value = "mealName")
    public String getMealName() {
        return mealName;
    }

    @JsonProperty(value = "mealName")
    public void setMealName(String mealName) {
        this.mealName = mealName;
    }

    @JsonProperty(value = "price")
    public BigDecimal getPrice() {
        return price;
    }

    @JsonProperty(value = "price")
    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @JsonProperty(value = "restaurant")
    public Set<Restaurant> getRestaurants() {
        return restaurants;
    }

    @JsonProperty(value = "restaurant")
    public void setRestaurants(Set<Restaurant> restaurants) {
        this.restaurants = restaurants;
    }

/*    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }*/
}
