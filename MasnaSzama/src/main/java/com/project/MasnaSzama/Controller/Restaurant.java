package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Person.Courier;
import com.project.MasnaSzama.Model.User.UserAccount;
import com.project.MasnaSzama.Repository.CourierRepository;
import com.project.MasnaSzama.Repository.Restaurant.RestaurantRepository;
import com.project.MasnaSzama.Repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/restaurant")
public class Restaurant {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping(path = "getbycity")
    public @ResponseBody Iterable<Restaurant> getRestaurantsByCity(@RequestParam String city){
    }
}
