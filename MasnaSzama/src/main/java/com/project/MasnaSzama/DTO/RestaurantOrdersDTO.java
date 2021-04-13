package com.project.MasnaSzama.DTO;

public class RestaurantOrdersDTO {

    private Long orderId;
    private String name;

    public RestaurantOrdersDTO(Long orderId, String name) {
        this.orderId = orderId;
        this.name = name;
    }

    public Long getOrderId() {
        return orderId;
    }

    public String getName() {
        return name;
    }
}
