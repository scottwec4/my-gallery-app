import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ArtItem {
  title: string;
  medium: string;
  year: string;
  imageUrl?: string; // Ensure this optional string contract is here
}

export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  // Update these objects to explicitly include the imageUrl property or set them to undefined/placeholder links
  private artGallery: ArtItem[] = [
    {
      title: 'Plein Air from top of North Rim',
      medium: 'Oil on Board',
      year: '2024',
      imageUrl: 'GrandCannon.jpg'
    },
    {
      title: 'Arabian Horse',
      medium: 'Oil on Board',
      year: '2025',
      imageUrl: 'arabian.jpg'
    }
  ];

  private awardsList: AwardItem[] = [
    {
      title: 'Fine Art Technical Composition Prize',
      issuer: 'Academy Review Exhibition Council',
      date: 'May 2026',
      description: 'Recognized for elegant execution of lighting and complex structural grids.'
    },
    {
      title: 'Distinguished Draughtsman Achievement',
      issuer: 'Cohort Guild Masters Guild',
      date: 'November 2025',
      description: 'Awarded to artists demonstrating strict mastery over structural layouts.'
    }
  ];

  getArtGallery(): Observable<ArtItem[]> { return of(this.artGallery); }
  getAwardsList(): Observable<AwardItem[]> { return of(this.awardsList); }
}
