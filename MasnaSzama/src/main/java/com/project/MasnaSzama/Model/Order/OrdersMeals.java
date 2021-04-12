package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Payment.Payment;

import javax.persistence.*;

@Entity
@Table(name = "orders_meals")
public class OrdersMeals {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_meal_id")
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "meal_id")
    private Meal meal;

    public Meal getMeal() {
        return meal;
    }

    @OneToOne
    @JoinColumn(name="opinion_id", nullable=false)
    private Opinion opinion;

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
