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
    private Integer orderPrice;

    private String orderedTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String desiredDeliveryTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());

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

    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    private Customer customer;

    @OneToMany(mappedBy = "order")
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    public Set<OrdersMeals> getOrdersMeals() {
        return ordersMeals;
    }

    @OneToOne
    @JoinColumn(name="payment_id", nullable=false)
    private Payment payment;

    @OneToOne
    @JoinColumn(name="status_id", nullable=false)
    private Status orderStatus;

    public void setOrdersMeals(Set<OrdersMeals> ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

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

    public Integer getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(Integer orderPrice) {
        this.orderPrice = orderPrice;
    }

    public Set<Courier> getCouriers() {
        return couriers;
    }

    public void setCouriers(Set<Courier> couriers) {
        this.couriers = couriers;
    }

    public String getOrderedTime() {
        return orderedTime;
    }

    public void setOrderedTime(String orderedTime) {
        this.orderedTime = orderedTime;
    }

    public String getDesiredDeliveryTime() {
        return desiredDeliveryTime;
    }

    public void setDesiredDeliveryTime(String desiredDeliveryTime) {
        this.desiredDeliveryTime = desiredDeliveryTime;
    }

    public Status getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Status orderStatus) {
        this.orderStatus = orderStatus;
    }
}
