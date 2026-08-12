package com.artportfolio;

public class ArtworkResponseDTO {

    private Long id;
    private String title;
    private String medium; // Converted from Enum constant to clean string format (e.g. "Oil")
    private String dimensions;
    private String year;
    private String imageUrl;

    // Default Constructor
    public ArtworkResponseDTO() {}

    // Convenience Constructor to map straight from your Entity Model
    public ArtworkResponseDTO(Artwork artwork) {
        this.id = artwork.getId();
        this.title = artwork.getTitle();
        // Dynamically extract your custom display name getter configured inside your Enum class
        this.medium = artwork.getMedium() != null ? artwork.getMedium().getDisplayName() : null;
        this.dimensions = artwork.getDimensions();
        this.year = artwork.getYear();
        this.imageUrl = artwork.getImageUrl();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getMedium() { return medium; }
    public void setMedium(String medium) { this.medium = medium; }

    public String getDimensions() { return dimensions; }
    public void setDimensions(String dimensions) { this.dimensions = dimensions; }

    public String getYear() { return year; }
    public void setYear(String year) { this.year = year; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
