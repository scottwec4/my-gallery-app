import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {map, Observable} from 'rxjs';
import { ArtService, ArtItem, AwardItem } from '../../services/art.service';
import { HeaderComponent } from '../header/header.component';
import { ShowcaseComponent } from '../showcase/showcase.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    AsyncPipe,
    HeaderComponent,
    ShowcaseComponent
  ],

  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  subCategories: string[] = [
    'portraits', 'figures', 'drawings', 'landscapes', 'still lifes', 'available work'
  ];

  selectedCategory: string = 'portraits';

  artGallery$!: Observable<ArtItem[]>;
  awardsList$!: Observable<AwardItem[]>;
  filteredGallery$!: Observable<ArtItem[]>;

  // Lightbox Modal States
  isLightboxOpen: boolean = false;
  activeItem: ArtItem | null = null;

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.artGallery$ = this.artService.getArtGallery();

    this.filterImages();
    this.artGallery$ = this.artService.getArtGallery();
    this.awardsList$ = this.artService.getAwardsList();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterImages();
  }

  private filterImages(): void {
    this.filteredGallery$ = this.artGallery$.pipe(
      map(items => items.filter(item => item.category.toLowerCase() === this.selectedCategory.toLowerCase()))
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
