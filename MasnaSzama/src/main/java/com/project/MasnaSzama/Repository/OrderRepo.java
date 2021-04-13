package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.DTO.OrdersDTO;
import com.project.MasnaSzama.DTO.RestaurantOrdersDTO;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Views.OrdersDelivery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepo extends CrudRepository<Order, Long> {
    @Query(value = "SELECT new com.project.MasnaSzama.DTO.OrdersDTO" +
    "(o.orderId, o.tip, o.customer.personId)" +
    "FROM Order o " +
    "WHERE o.customer.personId = ?1")
    List<OrdersDTO> getOrderByCustomerId(Long customerId);

    // Test
    @Query(value = "SELECT new com.project.MasnaSzama.DTO.RestaurantOrdersDTO" +
                    "(o.orderId, m.name) " +
            "FROM Order o " +
            "JOIN OrdersMeals om ON om.order.orderId = o.orderId " +
            "JOIN Meal m ON m.mealId = om.meal.mealId " +
            "WHERE o.restaurant.restaurantId = ?1")
    List<RestaurantOrdersDTO> getOrdersByRestaurantId(Long restaurantId);

    @Query(value = "SELECT new com.project.MasnaSzama.Model.Views.OrdersDelivery" +
                    "(od.orderId, od.courierId, od.orderPrice, od.restoName, od.customerAddress, od.phoneNumber) " +
                    "FROM OrdersDelivery od " +
                    "WHERE od.courierId = ?1")
    List<OrdersDelivery> getOrdersToDeliverByCourierId(Long courierId);
}
