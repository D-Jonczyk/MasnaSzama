package com.project.MasnaSzama.Model.Order;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "status_")
public class Status {
    private Long statusId;
    private String statusName;

    @OneToOne(mappedBy="orderStatus")
    private Order order;

    public Status() {

    }

   /* public Status(Long statusId, String statusName) {
        this.statusId = statusId;
        this.statusName = statusName;
    }*/

    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }

    public void setStatusId(Long id) {
        this.statusId = id;
    }

    @Id
    public Long getStatusId() {
        return statusId;
    }

    public Status(Long statusId){
        this.statusId = statusId;
    }
}
