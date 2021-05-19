package com.project.MasnaSzama.Model.Views;

import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Immutable
public class OrdersFinished {
    @Id
    private Long orderId;
    private Long courierId;
    private Integer orderPrice;
    private String restoName;
    private String customerAddress;
    private Long phoneNumber;

    private String deliveredTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String orderedTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String desiredDeliveryTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());

    public OrdersFinished(Long orderId, Long courierId, Integer orderPrice, String restoName,
                          String customerAddress, Long phoneNumber, String orderedTime, String desiredDeliveryTime, String deliveredTime) {
        this.orderId = orderId;
        this.courierId = courierId;
        this.orderPrice = orderPrice;
        this.restoName = restoName;
        this.customerAddress = customerAddress;
        this.phoneNumber = phoneNumber;
        this.orderedTime = orderedTime;
        this.desiredDeliveryTime = desiredDeliveryTime;
        this.deliveredTime = deliveredTime;
    }

    public OrdersFinished() {

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

    public String getDeliveredTime() {
        return deliveredTime;
    }

    public void setDeliveredTime(String deliveredTime) {
        this.deliveredTime = deliveredTime;
    }

}
