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
    },
    {
      title: 'Des Moines WA Twilight',
      medium: 'Oil on Board',
      year: '2025',
      imageUrl: 'twilight.jpg'
    },
    {
      title: 'Green River WY',
      medium: 'Gouache',
      year: '2024',
      imageUrl: 'greenRiver.png'
    }
  ];

  private awardsList: AwardItem[] = [
    {
      title: 'Best & Brightest',
      issuer: 'Scottsdale Artists School',
      date: '2026',
      description: 'SECOND PLACE'
    },
    {
      title: 'Best of Gage',
      issuer: 'Gage Academy of Art',
      date: '2020',
      description: 'FIRST PLACE in Landscape.'
    },
    {
      title: 'Self-Image',
      issuer: 'Gage Academy of Art',
      date: '2019',
      description: 'HONORABLE MENTION'
    }
  ];

  getArtGallery(): Observable<ArtItem[]> { return of(this.artGallery); }
  getAwardsList(): Observable<AwardItem[]> { return of(this.awardsList); }
}
