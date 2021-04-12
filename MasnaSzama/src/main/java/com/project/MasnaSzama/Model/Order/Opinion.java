package com.project.MasnaSzama.Model.Order;

import com.project.MasnaSzama.Model.Person.Customer;

import javax.persistence.*;

@Entity
public class Opinion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long opinionId;

    @OneToOne(mappedBy="opinion")
    private OrdersMeals ordersMeals;

    private int rating;
    private String comment;
}
