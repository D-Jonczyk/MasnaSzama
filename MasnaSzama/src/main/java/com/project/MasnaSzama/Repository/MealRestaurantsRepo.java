package com.project.MasnaSzama.Repository;
import com.project.MasnaSzama.Model.Order.Meal;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import javax.transaction.Transactional;
import java.math.BigDecimal;


public interface MealRestaurantsRepo extends CrudRepository<Meal,Long> {
    @Modifying
    @Transactional
    @Query(value =  "DELETE FROM restaurants_meals where restaurant_id =?2 AND meal_id =?1", nativeQuery = true)
    void deleteMealByMealId(Long mealId, Long RestaurantId);

    @Modifying
    @Transactional
    @Query(value = "UPDATE meal m SET m.name=?3, m.price=?2 WHERE m.meal_id=?1", nativeQuery = true)
    void updateMealByMealId(Long mealId, BigDecimal price, String name);




    // @Modifying
   // @Transactional
   // @Query(value = "INSERT INTO meal ", nativeQuery = true)
   // void insertMealByMealId(Long mealId, BigDecimal price, String name);

}


