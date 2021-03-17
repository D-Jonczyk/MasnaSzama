package com.project.MasnaSzama.Model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Role {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer roleId;

    private String roleName;
}
