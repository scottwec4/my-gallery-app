package com.artportfolio;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ArtworkRequestDTO(
        @NotBlank(message = "Title is required")
        @Size(max = 40, message = "Title cannot exceed 40 characters")
        String title,

        @NotNull(message = "Medium type is required")
        MediumType medium,

        @NotBlank(message = "Dimensions are required")
        @Size(max = 20, message = "Dimensions cannot exceed 20 characters")
        String dimensions,

        @NotBlank(message = "Year is required")
        @Size(max = 4, message = "Year cannot exceed 4 characters")
        String year,

        @NotBlank(message = "Image URL is required")
        @Size(max = 40, message = "Image URL cannot exceed 40 characters")
        String imageUrl,

        @NotBlank(message = "Category is required")
        @Size(max = 30, message = "Category cannot exceed 30 characters")
        String category,

        @Size(max = 20, message = "Custom ID cannot exceed 20 characters")
        String customId,

        @NotBlank(message = "Price is required")
        @Size(max = 20, message = "Price format cannot exceed 20 characters")
        int price
) {}
