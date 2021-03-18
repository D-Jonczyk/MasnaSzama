package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Person.Courier;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderId;

    private Integer tip;

    @ManyToOne
    @JoinColumn(name = "courier_id", nullable = false)
    private Courier courier;

    public Order(){
        super();
    }

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "order_meals",
            joinColumns = { @JoinColumn(name = "order_id") },
            inverseJoinColumns = { @JoinColumn(name = "meal_id") }
    )
    private Set<Meal> meals;

    @OneToOne
    @JoinColumn(name = "opinion_id", nullable = false)
    private Opinion opinion;

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
