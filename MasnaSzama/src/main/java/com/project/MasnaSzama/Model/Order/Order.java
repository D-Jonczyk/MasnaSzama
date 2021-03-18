package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Payment.Payment;
import com.project.MasnaSzama.Model.Person.Courier;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "_order")
public class Order {
    private Integer tip;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderId;

    @ManyToMany(cascade = { CascadeType.ALL})
    @JoinTable(
            name = "orders_meals",
            joinColumns = { @JoinColumn(name = "order_id")},
            inverseJoinColumns = { @JoinColumn(name = "meal_id")}
    )
    Set<Meal> orderMeals = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "courier_id", nullable = false)
    private Courier courier;

    public Order(){
        super();
    }

    @OneToOne
    @JoinColumn(name = "opinion_id", nullable = false)
    private Opinion opinion;

    @OneToOne
    @JoinColumn(name = "payment_id", nullable = false)
    private Payment payment;

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

    public Courier getCourier() {
        return courier;
    }

    public void setCourier(Courier courier) {
        this.courier = courier;
    }
}
