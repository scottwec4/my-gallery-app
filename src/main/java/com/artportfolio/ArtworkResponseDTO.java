package com.artportfolio;

public record ArtworkResponseDTO(
        Long id,
        String title,
        String medium, // Converted from Enum constant to clean string format (e.g. "Oil")
        String dimensions,
        String year,
        String imageUrl,
        String category,
        String customId,
        int price
) {
    // Compact constructor to map straight from your Entity Model
    public ArtworkResponseDTO(Artwork artwork) {
        this(
                artwork.getId(),
                artwork.getTitle(),
                artwork.getMedium() != null ? artwork.getMedium().getDisplayName() : null,
                artwork.getDimensions(),
                artwork.getYear(),
                artwork.getImageUrl(),
                artwork.getCategory(),
                artwork.getCustomId(),
                artwork.getPrice()
        );
    }
}
