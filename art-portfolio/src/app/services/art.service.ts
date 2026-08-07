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
    },
    {
      title: "Charcoal Figure",
      medium: "Oil",
      year: "2024",
      imageUrl: "charcoalFigure.jpg"
    },
    {
      title: "Drama Study",
      medium: "Oil",
      year: "2024",
      imageUrl: "dramaStudy.jpg"
    },
    {
      title: "Drawing Head",
      medium: "Oil",
      year: "2024",
      imageUrl: "drawingHead.jpg"
    },
    {
      title: "Figure Study One",
      medium: "Oil",
      year: "2024",
      imageUrl: "figureStudyOne.jpg"
    },
    {
      title: "Figure Study Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "figureStudyThree.jpg"
    },
    {
      title: "Figure Study Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "figureStudyTwo.jpg"
    },
    {
      title: "Grand Canyon Four",
      medium: "Oil",
      year: "2024",
      imageUrl: "grandcanyonFour.jpg"
    },
    {
      title: "Grand Canyon One",
      medium: "Oil",
      year: "2024",
      imageUrl: "grandcanyonOne.jpg"
    },
    {
      title: "Grand Canyon Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "grandcanyonThree.jpg"
    },
    {
      title: "Grand Canyon Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "grandcanyonTwo.jpg"
    },
    {
      title: "Hand Study",
      medium: "Oil",
      year: "2024",
      imageUrl: "handStudy.jpg"
    },
    {
      title: "Horse One",
      medium: "Oil",
      year: "2024",
      imageUrl: "horseOne.jpg"
    },
    {
      title: "Horse Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "horseTwo.jpg"
    },
    {
      title: "Landscape 1",
      medium: "Oil",
      year: "2024",
      imageUrl: "landscape1.PNG"
    },
    {
      title: "Landscape Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "landscapeTwo.jpg"
    },
    {
      title: "Liberace 1",
      medium: "Oil",
      year: "2024",
      imageUrl: "liberace1.jpg"
    },
    {
      title: "Long Beach Wa",
      medium: "Oil",
      year: "2024",
      imageUrl: "longBeachWa.jpg"
    },
    {
      title: "Pensive Portrait",
      medium: "Oil",
      year: "2024",
      imageUrl: "pensivePortrait.jpg"
    },
    {
      title: "Plein Air 1",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAir1.jpg"
    },
    {
      title: "Plein Air 2",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAir2.jpg"
    },
    {
      title: "Plein Air Five",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAirFive.jpg"
    },
    {
      title: "Plein Air Four",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAirFour.jpg"
    },
    {
      title: "Plein Air Six",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAirSix.jpg"
    },
    {
      title: "Plein Air Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAirThree.jpg"
    },
    {
      title: "Plein Air Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "pleinAirTwo.jpg"
    },
    {
      title: "Portrait Eight",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitEight.jpg"
    },
    {
      title: "Portrait Five",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitFive.jpg"
    },
    {
      title: "Portrait Four",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitFour.jpg"
    },
    {
      title: "Portrait One",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitOne.jpg"
    },
    {
      title: "Portrait Seven",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitSeven.jpg"
    },
    {
      title: "Portrait Six",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitSix.jpg"
    },
    {
      title: "Portrait Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitThree.jpg"
    },
    {
      title: "Portrait Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitTwo.jpg"
    },
    {
      title: "Rembrandt",
      medium: "Oil",
      year: "2024",
      imageUrl: "rembrandt.jpg"
    },
    {
      title: "Rembrandt Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "rembrandtTwo.jpg"
    },
    {
      title: "San Fran Model",
      medium: "Oil",
      year: "2024",
      imageUrl: "sanFranModel.jpg"
    },
    {
      title: "Sargent Study",
      medium: "Oil",
      year: "2024",
      imageUrl: "sargentStudy.jpg"
    },
    {
      title: "Still Life One",
      medium: "Oil",
      year: "2024",
      imageUrl: "stillLifeOne.jpg"
    },
    {
      title: "Still Life Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "stillLifeTwo.jpg"
    },
    {
      title: "Tree Mirror",
      medium: "Oil",
      year: "2024",
      imageUrl: "treeMirror.jpg"
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
