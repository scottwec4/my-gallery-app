import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ArtItem {
  title: string;
  medium: string;
  year: string;
  category: string;
  imageUrl: string; // Will hold the custom ID from JSON
  id: string;
  dimensions: string;
  status: string;
  price: number;
}

export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

interface ApiResponse {
  artGallery: ArtItem[];
  awardsList: AwardItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  // Path pointing to your assets directory
  private dataUrl = 'data/gallery-data.json';

  constructor(private http: HttpClient) {}

  getArtGallery(): Observable<ArtItem[]> {
    return this.http.get<ApiResponse>(this.dataUrl).pipe(
      map(response => response.artGallery)
    );
  }

  getAwardsList(): Observable<AwardItem[]> {
    return this.http.get<ApiResponse>(this.dataUrl).pipe(
      map(response => response.awardsList)
    );
  }
}
