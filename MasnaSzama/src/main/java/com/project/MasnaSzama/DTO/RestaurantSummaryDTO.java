package com.project.MasnaSzama.DTO;

public class RestaurantSummaryDTO {

    private String name;
    private String description;


    public RestaurantSummaryDTO(String name, String description) {
        this.name = name;
        this.description = description;

    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }



}
