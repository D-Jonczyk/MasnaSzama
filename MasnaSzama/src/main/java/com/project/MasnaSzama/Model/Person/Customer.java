package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.Address.Address;
import com.project.MasnaSzama.Model.Order.Order;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Customer extends Person{

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "Customer_Address",
            joinColumns = { @JoinColumn(name = "person_id") },
            inverseJoinColumns = { @JoinColumn(name = "address_id") }
    )
    Set<Address> addresses = new HashSet<>();

    @OneToMany(mappedBy="customer")
    private Set<Order> orders;
}
