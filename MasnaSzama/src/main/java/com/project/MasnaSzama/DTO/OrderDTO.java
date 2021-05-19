package com.project.MasnaSzama.DTO;

import com.project.MasnaSzama.Model.Payment.Payment;
import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;

public class OrderDTO {
    private Integer tip;
    private Integer orderPrice;
    private String orderedTime;
    private String desiredDeliveryTime;
    private Restaurant restaurant;
    private Customer customer;
    private Payment payment;
}
