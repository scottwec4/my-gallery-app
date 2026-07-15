package com.artportfolio;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artworks")
@CrossOrigin(origins = "http://localhost:4200") // Connects to Angular default port
public class ArtworkController {

    private final ArtworkRepository artworkRepository;

    public ArtworkController(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    @GetMapping
    public List<Artwork> getAllArtworks() {
        return artworkRepository.findAll();
    }
}
