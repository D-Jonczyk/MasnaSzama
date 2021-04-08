package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.RestaurantMealDTO;
import com.project.MasnaSzama.DTO.RestaurantSummaryDTO;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Repository.Restaurant.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepo;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepo) {
        this.restaurantRepo = restaurantRepo;
    }

    public List<RestaurantSummaryDTO> getRestaurantsByCity(String city)
    {
        List<RestaurantSummaryDTO> restaurants = restaurantRepo.getRestaurantsByCity(city);
        return restaurants;
    }

    public List<RestaurantMealDTO> getMealsByRestaurantId(Long id)
    {
        List<RestaurantMealDTO> meals = restaurantRepo.getMealsByRestaurantId(id);
        return meals;
    }
}
