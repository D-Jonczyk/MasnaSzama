package com.project.MasnaSzama.Repository.Restaurant;

import com.project.MasnaSzama.DTO.RestaurantMealDTO;
import com.project.MasnaSzama.DTO.RestaurantSummaryDTO;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.EntityManager;
import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {

    @Query(value =  "SELECT new com.project.MasnaSzama.DTO.RestaurantSummaryDTO" +
                    "(r.restaurantId, r.restaurantName, r.restaurantDescription, " +
                    "r.averageOpinion, r.deliveryTime, r.deliveryCost, r.minOrderCost)" +
                    "FROM Restaurant r " +
                    "JOIN Address a ON a.addressId = r.address.addressId " +
                    "WHERE a.city = ?1")
    List<RestaurantSummaryDTO> getRestaurantsByCity(String city);

    @Query(value =  "SELECT new com.project.MasnaSzama.DTO.RestaurantMealDTO" +
                    "(m.mealId, m.mealName, m.price) " +
                    "FROM Meal m " +
                    "JOIN m.restaurants r " +
                    "WHERE r.restaurantId = ?1")
    List<RestaurantMealDTO> getMealsByRestaurantId(Long id);

}




