package com.artportfolio.services;

import com.artportfolio.models.Artwork;
import com.artportfolio.repositories.ArtworkRepository;
import com.artportfolio.dtos.ArtworkRequestDTO;
import com.artportfolio.dtos.ArtworkResponseDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArtworkService {

    private final ArtworkRepository artworkRepository;

    // Constructor Injection is preferred over @Autowired for easier testing
    public ArtworkService(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    /**
     * Retrieve all artwork records converted into response payload objects.
     */
    @Transactional(readOnly = true)
    public List<ArtworkResponseDTO> getAllArtworks() {
        return artworkRepository.findAll()
                .stream()
                .map(ArtworkResponseDTO::new) // Uses the constructor mapping inside the DTO record
                .collect(Collectors.toList());
    }

    /**
     * Retrieve a singular artwork record by its ID. Throws an exception if not found.
     */
    @Transactional(readOnly = true)
    public ArtworkResponseDTO getArtworkById(Long id) {
        Artwork artwork = artworkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artwork not found with ID: " + id));
        return new ArtworkResponseDTO(artwork);
    }

    /**
     * Persist a new artwork item.
     */
    @Transactional
    public ArtworkResponseDTO addArtwork(ArtworkRequestDTO request) {
        Artwork artwork = new Artwork();
        mapRequestToEntity(request, artwork);

        Artwork savedArtwork = artworkRepository.save(artwork);
        return new ArtworkResponseDTO(savedArtwork);
    }

    /**
     * Update an existing artwork record details.
     */
    @Transactional
    public ArtworkResponseDTO updateArtwork(Long id, ArtworkRequestDTO request) {
        Artwork artwork = artworkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artwork not found with ID: " + id));

        mapRequestToEntity(request, artwork);

        Artwork updatedArtwork = artworkRepository.save(artwork);
        return new ArtworkResponseDTO(updatedArtwork);
    }

    /**
     * Remove an artwork record by its database identification key.
     */
    @Transactional
    public void deleteArtwork(Long id) {
        if (!artworkRepository.existsById(id)) {
            throw new RuntimeException("Cannot delete. Artwork not found with ID: " + id);
        }
        artworkRepository.deleteById(id);
    }

    /**
     * Reusable private mapping helper logic updated for Java Record syntax and new fields
     */
    private void mapRequestToEntity(ArtworkRequestDTO source, Artwork destination) {
        destination.setTitle(source.title());
        destination.setMedium(source.medium());
        destination.setDimensions(source.dimensions());
        destination.setYear(source.year());
        destination.setImageUrl(source.imageUrl());
        destination.setCategory(source.category());
        destination.setCustomId(source.customId());
        destination.setPrice(source.price());
    }
}
