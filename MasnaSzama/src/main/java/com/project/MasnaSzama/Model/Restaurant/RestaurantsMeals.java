package com.project.MasnaSzama.Model.Restaurant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="restaurants_meals")
public class RestaurantsMeals {
    @Id
    @Column (name="restaurant_meal_id")
    private long id;



}
