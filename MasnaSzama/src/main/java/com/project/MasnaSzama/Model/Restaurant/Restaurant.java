package com.project.MasnaSzama.Model.Restaurant;

import com.project.MasnaSzama.Model.Address.Address;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Order.Order;

import javax.persistence.*;
import java.lang.Long;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long restaurantId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "addressId")
    private Address address;
    private String name;

    @OneToMany(mappedBy = "restaurant")
    private Set<Order> orders = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "menu",
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

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }
}
