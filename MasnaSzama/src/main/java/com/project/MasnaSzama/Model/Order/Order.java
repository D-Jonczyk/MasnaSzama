package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Payment.Payment;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "order_")
public class Order {
    private Integer tip;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    @ManyToMany
    @JoinTable(
            name = "couriers_orders",
            joinColumns = {@JoinColumn(name = "order_id")},
            inverseJoinColumns = {@JoinColumn(name = "person_id")}
    )
    Set<Courier> couriers = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL})
    @JoinTable(
            name = "orders_meals",
            joinColumns = { @JoinColumn(name = "order_id")},
            inverseJoinColumns = { @JoinColumn(name = "meal_id")}
    )
    Set<Meal> orders = new HashSet<>();



    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    private Customer customer;

    @OneToOne
    @JoinColumn(name="payment_id", nullable=false)
    private Payment payment;

    public Order(){
        super();
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Integer getTip() {
        return tip;
    }

    public void setTip(Integer tip) {
        this.tip = tip;
    }
}
