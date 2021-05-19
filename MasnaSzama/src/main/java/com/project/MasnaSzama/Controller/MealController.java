package com.project.MasnaSzama.Controller;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Repository.MealRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;




    @RestController
    @RequestMapping("/meal")
    public class MealController {
        private final MealRepo mealRepo;

        @Autowired
        public MealController(MealRepo mealRepo) {
            this.mealRepo = mealRepo;

        }

        @DeleteMapping("/delete")
        public void deleteMeal(@RequestParam Long mealId) {
            System.out.println(mealId);
            this.mealRepo.deleteMealByMealId(mealId);

        }

    }

