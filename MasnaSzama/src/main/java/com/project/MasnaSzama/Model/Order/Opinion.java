package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Person.Customer;

import javax.persistence.*;

@Entity
public class Opinion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long opinionId;

    private int rating;
    private String comment;


}
