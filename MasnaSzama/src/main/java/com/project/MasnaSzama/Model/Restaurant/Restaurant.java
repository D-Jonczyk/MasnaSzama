package com.project.MasnaSzama.Model.Restaurant;

import com.project.MasnaSzama.Model.Address.Address;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Order.Order;

import javax.persistence.*;
import java.lang.Long;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "restaurant")
public class Restaurant {

    public Restaurant() {

    }

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private Long restaurantId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    private String name;
    private String description;
    private Integer averageOpinion;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.EAGER)
    private Set<Order> orders = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "restaurants_meals",
            joinColumns = { @JoinColumn(name = "restaurant_id") },
            inverseJoinColumns = { @JoinColumn(name = "meal_id") }
    )
    private Set<Meal> meal;

    public Long getRestaurantId() {
        return restaurantId;
    }

    public Address getAddress() {
        return address;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public Integer getAverageOpinion() {
        return averageOpinion;
    }
}
