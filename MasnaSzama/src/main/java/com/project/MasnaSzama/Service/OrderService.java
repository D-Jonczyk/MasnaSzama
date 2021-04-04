package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.OrdersDTO;
import com.project.MasnaSzama.Model.Order.Order;
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
        List<OrdersDTO> orders = orderRepo.getOrderByCustomerId(personId);
        return orders;
    }
}
