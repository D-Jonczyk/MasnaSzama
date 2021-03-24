package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.RestaurantSummaryDTO;
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

    public List<RestaurantSummaryDTO> getRestaurantByCity(String city)
    {
        List<RestaurantSummaryDTO> restaurants = restaurantRepo.getRestaurantByCity(city);
        return restaurants;
    }
}
