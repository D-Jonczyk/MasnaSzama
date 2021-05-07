package com.project.MasnaSzama.Model.Views;

import com.project.MasnaSzama.DTO.OrdersDTO;
import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Immutable
public class OrdersDelivery {
    @Id
    private Long orderId;
    private Long courierId;
    private Integer orderPrice;
    private String restoName;
    private String customerAddress;
    private Long phoneNumber;

    private String orderedTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String desiredDeliveryTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());

    public OrdersDelivery(Long orderId, Long courierId, Integer orderPrice, String restoName,
                          String customerAddress, Long phoneNumber, String orderedTime, String desiredDeliveryTime) {
        this.orderId = orderId;
        this.courierId = courierId;
        this.orderPrice = orderPrice;
        this.restoName = restoName;
        this.customerAddress = customerAddress;
        this.phoneNumber = phoneNumber;
        this.orderedTime = orderedTime;
        this.desiredDeliveryTime = desiredDeliveryTime;
    }

    public OrdersDelivery() {

    }

    public Long getOrderId() {
        return orderId;
    }

    public Long getCourierId() {
        return courierId;
    }

    public Integer getOrderPrice() {
        return orderPrice;
    }

    public String getRestoName() {
        return restoName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public String getOrderedTime() {
        return orderedTime;
    }

    public String getDesiredDeliveryTime() {
        return desiredDeliveryTime;
    }
}
