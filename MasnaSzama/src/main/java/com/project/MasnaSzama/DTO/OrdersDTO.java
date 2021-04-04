package com.project.MasnaSzama.DTO;

public class OrdersDTO {
    private Long orderId;
    private Integer tip;
    private Long customerId;

    public OrdersDTO(Long orderId, Integer tip, Long customerId) {
        this.orderId = orderId;
        this.tip = tip;
        this.customerId = customerId;
    }

    public Integer getTip() {
        return tip;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public Long getOrderId() {
        return orderId;
    }
}
