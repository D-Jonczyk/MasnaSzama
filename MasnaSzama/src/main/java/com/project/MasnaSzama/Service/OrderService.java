package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
