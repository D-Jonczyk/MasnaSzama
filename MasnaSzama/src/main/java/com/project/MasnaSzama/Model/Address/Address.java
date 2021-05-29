package com.project.MasnaSzama.Model.Address;

import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long addressId;

    @OneToOne(mappedBy = "address")
    private Customer customer;

    @OneToOne(mappedBy = "address")
    private Restaurant restaurant;

    private String city;
    private String street;
    private Integer flatNumber;

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getFlatNumber() {
        return flatNumber;
    }

    public void setFlatNumber(Integer flatNumber) {
        this.flatNumber = flatNumber;
    }
}
