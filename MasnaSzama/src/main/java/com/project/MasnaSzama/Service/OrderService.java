package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.OrdersDTO;
import com.project.MasnaSzama.DTO.RestaurantOrdersDTO;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Views.OrdersDelivery;
import com.project.MasnaSzama.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepo orderRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
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

}
