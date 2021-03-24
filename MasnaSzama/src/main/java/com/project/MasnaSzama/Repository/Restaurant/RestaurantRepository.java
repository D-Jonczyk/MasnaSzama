package com.project.MasnaSzama.Repository.Restaurant;

import com.project.MasnaSzama.DTO.RestaurantSummaryDTO;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {

    @Query(value =  "SELECT new com.project.MasnaSzama.DTO.RestaurantSummaryDTO" +
                    "(r.name, r.description, AVG(op.rating))" +
                    "FROM Restaurant r " +
                    "JOIN Order o ON o.restaurant.restaurantId = r.restaurantId " +
                    "JOIN Opinion op ON op.opinionId = o.opinion.opinionId " +
                    "JOIN Address a ON a.addressId = r.address.addressId " +
                    "WHERE a.city = ?1 " +
                    "GROUP BY r.name, r.description")
    List<RestaurantSummaryDTO> getRestaurantByCity(String city);

}




