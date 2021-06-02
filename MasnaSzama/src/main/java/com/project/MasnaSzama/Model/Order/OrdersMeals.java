package com.project.MasnaSzama.Model.Order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.MasnaSzama.Model.Payment.Payment;

import javax.persistence.*;

@Entity
@Table(name = "orders_meals")
public class OrdersMeals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_meal_id")
    private Long orderMealId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "meal_id")
    private Meal meal;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="opinion_id")
    private Opinion opinion;

    @JsonProperty(value = "mealId")
    public Meal getMeal() {
        return meal;
    }

    @JsonProperty(value = "orderId")
    public Order getOrder() {
        return order;
    }

    @JsonProperty(value = "orderId")
    public void setOrder(Order order) {
        this.order = order;
    }

    @JsonProperty(value = "mealId")
    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    @JsonProperty(value = "orderMealId")
    public Long getOrderMealId() {
        return orderMealId;
    }

    @JsonProperty(value = "orderMealId")
    public void setOrderMealId(Long orderMealId) {
        this.orderMealId = orderMealId;
    }

    @JsonProperty(value = "opinionId")
    public Opinion getOpinion() {
        return opinion;
    }

    @JsonProperty(value = "opinionId")
    public void setOpinion(Opinion opinion) {
        this.opinion = opinion;
    }
}
