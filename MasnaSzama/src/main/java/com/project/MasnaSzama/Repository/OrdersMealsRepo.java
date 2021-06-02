package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.DTO.OrdersDTO;
import com.project.MasnaSzama.DTO.RestaurantOrdersDTO;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Order.OrdersMeals;
import com.project.MasnaSzama.Model.Views.OrdersDelivery;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface OrdersMealsRepo extends CrudRepository<OrdersMeals, Long> {


}
