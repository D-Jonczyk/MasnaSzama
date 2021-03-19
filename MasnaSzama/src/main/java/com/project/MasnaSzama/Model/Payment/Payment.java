package com.project.MasnaSzama.Model.Payment;

import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Person.Customer;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long paymentId;

    @OneToMany(mappedBy="payment")
    private Set<Order> orders;


}
