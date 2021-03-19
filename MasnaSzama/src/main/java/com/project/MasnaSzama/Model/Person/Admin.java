package com.project.MasnaSzama.Model.Person;


import com.project.MasnaSzama.Model.Request.Request;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Admin extends Person{

    @OneToMany(mappedBy = "admin")
    private Set<Request> request = new HashSet<>();

}
