package com.project.MasnaSzama.Model.Order;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Status {
    private Long statusId;
    private String name;

    @OneToOne(mappedBy="orderStatus")
    private Order order;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStatusId(Long id) {
        this.statusId = id;
    }

    @Id
    public Long getStatusId() {
        return statusId;
    }
}
