package com.project.MasnaSzama.DTO;

public class RestaurantSummaryDTO {

    private Long id;
    private String name;
    private String description;
    private int averageOpinion;
    private int deliveryTime;
    private int deliveryCost;
    private int minOrderCost;

    public RestaurantSummaryDTO(Long id, String name, String description, int averageOpinion, int deliveryTime, int deliveryCost, int minOrderCost) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.averageOpinion = averageOpinion;
        this.deliveryTime = deliveryTime;
        this.deliveryCost = deliveryCost;
        this.minOrderCost = minOrderCost;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getAverageOpinion() {
        return averageOpinion;
    }

    public int getDeliveryTime() {
        return deliveryTime;
    }

    public int getDeliveryCost() {
        return deliveryCost;
    }

    public int getMinOrderCost() {
        return minOrderCost;
    }
}
