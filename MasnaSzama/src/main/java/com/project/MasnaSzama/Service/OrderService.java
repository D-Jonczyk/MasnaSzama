package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.OrderDTO;
import com.project.MasnaSzama.DTO.OrdersDTO;
import com.project.MasnaSzama.DTO.RestaurantOrdersDTO;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Order.OrdersMeals;
import com.project.MasnaSzama.Model.Order.Status;
import com.project.MasnaSzama.Model.Views.OrdersDelivery;
import com.project.MasnaSzama.Repository.MealRepo;
import com.project.MasnaSzama.Repository.OrderRepo;
import com.project.MasnaSzama.Repository.OrdersMealsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepo orderRepo;
    private final MealRepo mealRepo;
    private final OrdersMealsRepo ordersMealsRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo, MealRepo mealRepo, OrdersMealsRepo ordersMealsRepo) {

        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
        this.ordersMealsRepo = ordersMealsRepo;
    }

    public Iterable<Order> findAllOrders(){
        return orderRepo.findAll();
    }

    public List<OrdersDTO> getOrderByCustomerId(Long personId) {
        return orderRepo.getOrderByCustomerId(personId);
    }

    public List<RestaurantOrdersDTO> getOrdersByRestaurantId(Long restaurantId) {
        return orderRepo.getOrdersByRestaurantId(restaurantId);
    }

    public List<OrdersDelivery> getOrdersToDeliverByCourierId(Long courierId){
        return orderRepo.getOrdersToDeliverByCourierId(courierId);
    }

    public void updateOrderStatus(Long orderId){
        orderRepo.updateOrderStatus(orderId);
    }

    public void createNewOrder(Order newOrder) {

        orderRepo.createNewOrder(newOrder);
    }

    public void createNewOrderTest(Order newOrder) {
        orderRepo.save(newOrder);
    }

    public void createNewOrderMeals(List<OrdersMeals> ordersMeals) {

        ordersMealsRepo.saveAll(ordersMeals);
    }

    public void createNewMeal(Meal newMeal) {
        mealRepo.save(newMeal);
    }
}
