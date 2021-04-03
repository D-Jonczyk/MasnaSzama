package com.project.MasnaSzama.DTO;

public class RestaurantSummaryDTO {

    private String name;
    private String description;
    private int averageOpinion;

    public RestaurantSummaryDTO(String name, String description, int averageOpinion) {
        this.name = name;
        this.description = description;
        this.averageOpinion = averageOpinion;

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
}
