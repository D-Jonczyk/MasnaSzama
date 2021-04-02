package com.project.MasnaSzama.Repository.Restaurant;

import com.project.MasnaSzama.DTO.RestaurantSummaryDTO;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {

    @Query(value =  "SELECT new com.project.MasnaSzama.DTO.RestaurantSummaryDTO" +
                    "(r.name, r.description, r.averageOpinion)" +
                    "FROM Restaurant r " +
                    "JOIN Address a ON a.addressId = r.address.addressId " +
                    "WHERE a.city = ?1")
    List<RestaurantSummaryDTO> getRestaurantByCity(String city);

}




