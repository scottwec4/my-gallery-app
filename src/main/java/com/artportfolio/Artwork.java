package com.artportfolio;

import jakarta.persistence.*;

@Entity
public class Artwork {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String medium; // e.g., "Oil on Canvas"
    private String dimensions; // e.g., "24x36 inches"
    private String imageUrl; // Path to your file: "/assets/images/my-painting.jpg"

    // Generate Getters, Setters, and Constructors here
}
