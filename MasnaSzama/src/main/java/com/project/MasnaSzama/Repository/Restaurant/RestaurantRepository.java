package com.project.MasnaSzama.Repository.Restaurant;

import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {

    @Query(value = "SELECT r FROM Restaurant r, Address a WHERE r.address.addressId = a.addressId AND a.city = ?1")
    List<Restaurant> getRestaurantByCity(String city);

}




