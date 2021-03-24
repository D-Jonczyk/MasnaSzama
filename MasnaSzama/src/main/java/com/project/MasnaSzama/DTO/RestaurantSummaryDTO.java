package com.project.MasnaSzama.DTO;

public class RestaurantSummaryDTO {

    private String name;
    private String description;
    private double raiting;

    public RestaurantSummaryDTO(String name, String description, double raiting) {
        this.name = name;
        this.description = description;
        this.raiting = raiting;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getRaiting() {
        return raiting;
    }

}
