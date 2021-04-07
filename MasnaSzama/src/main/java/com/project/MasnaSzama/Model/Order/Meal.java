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

    private String name;
    private BigDecimal price;

    @ManyToMany(mappedBy = "orders")
    private Set<Order> orders = new HashSet<>();

    @ManyToMany(mappedBy = "meal")
    private Set<Restaurant> restaurants;

    @OneToOne(mappedBy = "meal")
    private Request request;

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public Long getMealId() {
        return mealId;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
