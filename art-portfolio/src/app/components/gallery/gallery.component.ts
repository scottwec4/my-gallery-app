import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ArtService, ArtItem, AwardItem } from '../../services/art.service';
import { HeaderComponent } from '../header/header.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { CloudflareImagePipe } from '../../pipes/cloudflare-image.pipe'; // Added Import

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    AsyncPipe,
    HeaderComponent,
    ShowcaseComponent,
    CloudflareImagePipe // Added to Imports
  ],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  subCategories: string[] = [
    'portraits', 'figures', 'drawings', 'landscapes', 'still lifes', 'horses', 'available work'
  ];

  selectedCategory: string = 'portraits';

  artGallery$!: Observable<ArtItem[]>;
  awardsList$!: Observable<AwardItem[]>;
  filteredGallery$!: Observable<ArtItem[]>;

  isLightboxOpen: boolean = false;
  activeItem: ArtItem | null = null;

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    // Fixed: Assigned data streams first before attempting to filter them
    this.artGallery$ = this.artService.getArtGallery();
    this.awardsList$ = this.artService.getAwardsList();

    this.filterImages();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterImages();
  }

  private filterImages(): void {
    this.filteredGallery$ = this.artGallery$.pipe(
      map(items => items.filter(item => {
        // Special condition if 'available work' category logic is driven by the status property
        if (this.selectedCategory.toLowerCase() === 'available work') {
          return item.status?.toLowerCase() === 'available';
        }
        return item.category.toLowerCase() === this.selectedCategory.toLowerCase();
      }))
    );
  }

  openLightbox(item: ArtItem): void {
    this.activeItem = item;
    this.isLightboxOpen = true;
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    this.activeItem = null;
  }
}
