package com.project.MasnaSzama.Model.User;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Role {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer roleId; //foreign key

    private String roleName;
}
