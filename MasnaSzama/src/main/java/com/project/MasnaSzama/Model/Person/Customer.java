package com.project.MasnaSzama.Model.Person;

import com.project.MasnaSzama.Model.Address.Address;
import com.project.MasnaSzama.Model.Order.Order;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customer")
public class Customer extends Person{

    public Customer() {

    }

    @OneToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @OneToMany(mappedBy="customer", fetch = FetchType.EAGER)
    private Set<Order> orders;


    public Customer(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }
}
