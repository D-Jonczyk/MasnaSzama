package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.DTO.OrdersDTO;
import com.project.MasnaSzama.DTO.RestaurantOrdersDTO;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Views.OrdersDelivery;
import com.project.MasnaSzama.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = (List<Order>) orderService.findAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping(path = "/getby/customer")
    public List<OrdersDTO> getOrderByCustomerId(@RequestParam Long customerId){
        return orderService.getOrderByCustomerId(customerId);
    }

    @GetMapping(path = "/getbyRestaurantId")
    public List<RestaurantOrdersDTO> getOrdersByRestaurantId(@RequestParam Long restaurantId){
        return orderService.getOrdersByRestaurantId(restaurantId);
    }

    @GetMapping(path = "/getDeliveryByCourierId")
    public List<OrdersDelivery> getOrdersToDeliverByCourierId(@RequestParam Long courierId){
        return orderService.getOrdersToDeliverByCourierId(courierId);
    }

    @GetMapping(path = "/updateDeliveryOrderStatus")
    public void updateOrderStatus(@RequestParam Long orderId){
        orderService.updateOrderStatus(orderId);
    }

    @PutMapping(path = "/createNewOrder", headers = {
            "content-type=application/json" }, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewOrder(@RequestBody Order newOrder) {

        orderService.createNewOrder(newOrder);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
