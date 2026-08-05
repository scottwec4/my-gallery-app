import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private artService = inject(ArtService);

  // 1. Create reactive Signals for images and active index
  images = signal<string[]>([]);
  currentIndex = signal<number>(0);

  private intervalId: any = null;

  ngOnInit(): void {
    this.artService.getArtGallery().subscribe((artworks) => {
      const rawImages = artworks
        .map((art) => art.imageUrl)
        .filter((url): url is string => !!url);

      const formatted = rawImages.map((img) =>
        img.startsWith('/') || img.startsWith('http') ? img : `/${img}`
      );

      // Update signal
      this.images.set(formatted);

      if (formatted.length > 1) {
        this.startTimer();
      }
    });
  }

  private startTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // 2. Cycle index every 3 seconds using signal update
    this.intervalId = setInterval(() => {
      this.currentIndex.update((index) => (index + 1) % this.images().length);
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // 3. Helper getter reading the current signal value
  get currentImage(): string {
    const list = this.images();
    const idx = this.currentIndex();
    return list.length > 0 ? list[idx] : '/GrandCannon.jpg';
  }
}
