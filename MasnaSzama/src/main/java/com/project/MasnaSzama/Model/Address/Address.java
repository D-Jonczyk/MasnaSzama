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

    @ManyToMany(mappedBy = "addresses")
    private Set<Customer> customers = new HashSet<>();

    private String city;
    private String street;
    private Integer number;

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }
}
