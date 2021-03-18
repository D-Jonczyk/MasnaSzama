package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Person.Customer;

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

    @ManyToMany(mappedBy = "meals")
    private Set<Order> orders;

    public Long getMealId() {
        return mealId;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }
}
