package com.project.MasnaSzama.Model.Restaurant;

import com.project.MasnaSzama.Model.Address.Address;

import javax.persistence.*;
import java.lang.Long;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long restaurantId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "addressId")
    private Address address;

    private Integer bossId;

    public Restaurant() {

    }
}
