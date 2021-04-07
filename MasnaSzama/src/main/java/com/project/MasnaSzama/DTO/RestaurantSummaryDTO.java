package com.project.MasnaSzama.DTO;

public class RestaurantSummaryDTO {

    private Long id;
    private String name;
    private String description;
    private int averageOpinion;

    public RestaurantSummaryDTO(Long id, String name, String description, int averageOpinion) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.averageOpinion = averageOpinion;
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
}
