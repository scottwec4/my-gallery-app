package com.artportfolio;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artworks")
//@CrossOrigin(origins = "http://localhost:4200") // Connects to Angular default port
public class ArtworkController {

    private final ArtworkService artworkService;

    // Swapped repository out for your service to decouple database logic
    public ArtworkController(ArtworkService artworkService) {
        this.artworkService = artworkService;
    }

    @GetMapping
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<ArtworkResponseDTO>> getAllArtworks() {
        return ResponseEntity.ok(artworkService.getAllArtworks());
    }

    @GetMapping("/{id}") // Fixed syntax to include leading slash inside routing variable block
    @PreAuthorize("permitAll()")
    public ResponseEntity<ArtworkResponseDTO> getArtworkById(@PathVariable Long id) {
        return ResponseEntity.ok(artworkService.getArtworkById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<ArtworkResponseDTO> addArtwork(@Valid @RequestBody ArtworkRequestDTO request) {
        ArtworkResponseDTO createdArtwork = artworkService.addArtwork(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdArtwork);
    }

    @PutMapping("/{id}") // Bound the target item path variable to the execution context
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<ArtworkResponseDTO> updateArtwork(
            @PathVariable Long id,
            @Valid @RequestBody ArtworkRequestDTO request) {
        return ResponseEntity.ok(artworkService.updateArtwork(id, request));
    }

    @DeleteMapping("/{id}") // Added tracking path segment for the deleted entity target reference
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteArtwork(@PathVariable Long id) {
        artworkService.deleteArtwork(id);
        return ResponseEntity.noContent().build(); // Returns a clean 204 No Content response
    }
}
