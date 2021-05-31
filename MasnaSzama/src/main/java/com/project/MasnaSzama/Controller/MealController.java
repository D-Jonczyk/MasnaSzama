package com.project.MasnaSzama.Controller;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Repository.MealRestaurantsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@RestController


    @RequestMapping("/meal")
    public class MealController {
    private final MealRestaurantsRepo mealRestaurantsRepo;

    @Autowired
    public MealController(MealRestaurantsRepo mealRestaurantsRepo) {
        this.mealRestaurantsRepo = mealRestaurantsRepo;

    }

    @DeleteMapping("/delete")
    public void deleteMeal(@RequestParam Long mealId, @RequestParam Long restaurantId) {
        System.out.println(mealId + "" + restaurantId);
        this.mealRestaurantsRepo.deleteMealByMealId(mealId, restaurantId);
    }


    @PutMapping(path = "/update", headers = {
            "content-type=application/json"}, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateMeal(@RequestBody Meal meal) {

        Long mealId = meal.getMealId();
        BigDecimal price = meal.getPrice();
        String mealName = meal.getMealName();
        this.mealRestaurantsRepo.updateMealByMealId(mealId, price, mealName);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}



