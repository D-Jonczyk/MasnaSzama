package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.Address.Address;
import com.project.MasnaSzama.Model.Order.Order;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Customer extends Person{

    @OneToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @OneToMany(mappedBy="customer")
    private Set<Order> orders;
}
