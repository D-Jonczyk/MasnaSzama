package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.Model.Order.Meal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MealRepo extends CrudRepository<Meal, Long> {
    
}
