package com.artportfolio;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Artwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @NotBlank(message = "Title is required")
    @Size(max = 40, message = "Title cannot exceed 40 characters")
    @Column(name = "container_nbr", nullable = false, length = 40)
    private String title;

    // Persists the enum constant name (e.g., "OIL", "MIXED_MEDIA") as a String in the database
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MediumType medium;

    @NotBlank(message = "Dimensions are required")
    @Size(max = 20, message = "Dimensions cannot exceed 20 characters")
    @Column(nullable = false, length = 20)
    private String dimensions;

    @NotBlank(message = "Year is required")
    @Size(max = 4, message = "Year cannot exceed 4 characters")
    @Column(nullable = false, length = 4)
    private String year;

    @NotBlank(message = "Image URL is required")
    @Size(max = 40, message = "Image URL cannot exceed 40 characters")
    @Column(name = "image_url", nullable = false, length = 40)
    private String imageUrl;

    // Default Constructor required by JPA/Hibernate
    public Artwork() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public MediumType getMedium() {
        return medium;
    }

    public void setMedium(MediumType medium) {
        this.medium = medium;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
