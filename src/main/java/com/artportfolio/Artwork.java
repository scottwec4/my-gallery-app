package com.artportfolio;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "artworks")
public class Artwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    // Captures the string-based key from your JSON (e.g., "drama-lady")
    @NotBlank(message = "Custom ID is required")
    @Size(max = 50, message = "Custom ID cannot exceed 50 characters")
    @Column(name = "custom_id", nullable = false, unique = true, length = 50)
    private String customId;

    @NotBlank(message = "Title is required")
    @Size(max = 40, message = "Title cannot exceed 40 characters")
    @Column(name = "title", nullable = false, length = 40) // Fixed: Changed container_nbr to title
    private String title;

    @NotBlank(message = "Category is required")
    @Size(max = 30, message = "Category cannot exceed 30 characters")
    @Column(nullable = false, length = 30)
    private String category;

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
    @Size(max = 100, message = "Image URL cannot exceed 100 characters")
    @Column(name = "image_url", nullable = false, length = 100)
    private String imageUrl;

    @NotBlank(message = "Status is required")
    @Size(max = 20, message = "Status cannot exceed 20 characters")
    @Column(nullable = false, length = 20)
    private String status;

    @NotNull(message = "Price is required")
    @Min(value = 0, message = "Price cannot be negative")
    @Column(nullable = false)
    private Integer price;

    // Default Constructor required by JPA/Hibernate
    public Artwork() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomId() {
        return customId;
    }

    public void setCustomId(String customId) {
        this.customId = customId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
