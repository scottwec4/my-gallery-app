package com.artportfolio;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class ArtworkRequestDTO {

    @NotBlank(message = "Title is required")
    @Size(max = 40, message = "Title cannot exceed 40 characters")
    private String title;

    @NotNull(message = "Medium type is required")
    private MediumType medium;

    @NotBlank(message = "Dimensions are required")
    @Size(max = 20, message = "Dimensions cannot exceed 20 characters")
    private String dimensions;

    @NotBlank(message = "Year is required")
    @Size(max = 4, message = "Year cannot exceed 4 characters")
    private String year;

    @NotBlank(message = "Image URL is required")
    @Size(max = 40, message = "Image URL cannot exceed 40 characters")
    private String imageUrl;

    // Default Constructor
    public ArtworkRequestDTO() {}

    // Getters and Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public MediumType getMedium() { return medium; }
    public void setMedium(MediumType medium) { this.medium = medium; }

    public String getDimensions() { return dimensions; }
    public void setDimensions(String dimensions) { this.dimensions = dimensions; }

    public String getYear() { return year; }
    public void setYear(String year) { this.year = year; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
