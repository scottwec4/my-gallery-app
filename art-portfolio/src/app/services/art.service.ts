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
      title: "Drama Lady",
      medium: "Oil",
      year: "2024",
      imageUrl: "dramaLady.jpg"
    },
    {
      title: "Drawing Head One",
      medium: "Oil",
      year: "2024",
      imageUrl: "drawingHeadOne.jpg"
    },
    {
      title: "Figure Study one",
      medium: "Oil",
      year: "2024",
      imageUrl: "dudeFigureOne.jpg"
    },
    {
      title: "Portrait Painting One",
      medium: "Oil",
      year: "2024",
      imageUrl: "dudePortraitOne.jpg"
    },
    {
      title: "Portrait Painting Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "dudePortraitTwo.jpg"
    },
    {
      title: "Portrait Painting Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "girlPortraitOne.jpg"
    },
    {
      title: 'Plein Air from top of North Rim',
      medium: 'Oil on Board',
      year: '2024',
      imageUrl: 'GrandCannon.jpg'
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
      title: 'Green River WY',
      medium: 'Gouache',
      year: '2024',
      imageUrl: 'greenRiver.png'
    },
    {
      title: "Hand Study",
      medium: "Oil",
      year: "2024",
      imageUrl: "myHandOne.jpg"
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
      title: "Lady Figure One",
      medium: "Oil",
      year: "2024",
      imageUrl: "ladyFigureOne.jpg"
    },
    {
      title: "Lady Figure Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "ladyFigureThree.jpg"
    },
    {
      title: "Man Portrait One",
      medium: "Oil",
      year: "2024",
      imageUrl: "manPortrait.jpg"
    },
    {
      title: "Boy Portrait One",
      medium: "Oil",
      year: "2024",
      imageUrl: "boyPortrait.jpg"
    },
    {
      title: "Drawing Portrait Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "drawingPortrait2.jpg"
    },
    {
      title: "Lady Towel Head",
      medium: "Oil",
      year: "2024",
      imageUrl: "ladyTowelHead.jpg"
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
      title: "Man Figure Charcoal One",
      medium: "Oil",
      year: "2024",
      imageUrl: "ManFigureCharcoalOne.jpg"
    },
    {
      title: "Lady Figure Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "nakedLady.jpg"
    },
    {
      title: "Lady Figure Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "oldLady1.jpg"
    },
    {
      title: "Lady Figure Four",
      medium: "Oil",
      year: "2024",
      imageUrl: "pensiveLady.jpg"
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
      title: "Liberace Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyFive.jpg"
    },
    {
      title: "Lady Portrait Four",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyFour.jpg"
    },
    {
      title: "Lady Portrait Seven",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadySeven.jpg"
    },
    {
      title: "Lady Portrait Six",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadySix.jpg"
    },
    {
      title: "Sargent Portrait Study One",
      medium: "Oil",
      year: "2024",
      imageUrl: "sargentLady.jpg"
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
      title: "Portrait Five",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyFive.jpg"
    },
    {
      title: "Portrait Four",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyFour.jpg"
    },
    {
      title: "Portrait One",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyOne.jpg"
    },
    {
      title: "Portrait Three",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyThree.jpg"
    },
    {
      title: "Portrait Two",
      medium: "Oil",
      year: "2024",
      imageUrl: "portraitLadyTwo.jpg"
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
      imageUrl: "sargentLady.jpg"
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
