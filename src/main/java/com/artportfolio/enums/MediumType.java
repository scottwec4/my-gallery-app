package com.artportfolio.enums;

public enum MediumType {
    OIL("Oil"),
    CHARCOAL("Charcoal"),
    GRAPHITE("Graphite"),
    WATERCOLOR("Watercolor"),
    PASTEL("Pastel"),
    ACRYLIC("Acrylic"),
    MIXED_MEDIA("Mixed Media"),
    SCULPTURE("Sculpture");

    private final String displayName;

    // Constructor
    MediumType(String displayName) {
        this.displayName = displayName;
    }

    // Getter to retrieve the formatted string
    public String getDisplayName() {
        return displayName;
    }
}
