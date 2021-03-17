package com.project.MasnaSzama.Model.Address;

import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import javax.persistence.*;

@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long addressId;

    private String city;

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }
}
