package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import com.project.MasnaSzama.Repository.Restaurant.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping(path = "/getbycity")
    public List<Restaurant> getRestaurantsByCity(@RequestParam String city){

        List<Restaurant> restaurants = restaurantRepository.getRestaurantByCity(city);
        for (var r : restaurants) {
            //System.out.println(r.getName());
        }
        return restaurants;
    }
}
