import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ArtItem {
  title: string;
  medium: string;
  year: string;
  category: string;
  imageUrl?: string;
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

  private artGallery: ArtItem[] = [
    {
      title: "Drama Lady",
      medium: "Oil",
      year: "2022",
      category: "Portraits",
      imageUrl: "dramaLady.jpg"
    },
    {
      title: "Drawing Head One",
      medium: "Oil",
      year: "2022",
      category: "Drawings",
      imageUrl: "drawingHeadOne.jpg"
    },
    {
      title: "Figure Study one",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "dudeFigureOne.jpg"
    },
    {
      title: "Portrait Painting One",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "dudePortraitOne.jpg"
    },
    {
      title: "Portrait Painting Two",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "dudePortraitTwo.jpg"
    },
    {
      title: "Portrait Painting Three",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "girlPortraitOne.jpg"
    },
    {
      title: 'Plein Air from top of North Rim',
      medium: 'Oil on Board',
      category: "Landscapes",
      year: '2024',
      imageUrl: 'GrandCannon.jpg'
    },
    {
      title: "Grand Canyon Four",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "grandcanyonFour.jpg"
    },
    {
      title: "Grand Canyon One",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "grandcanyonOne.jpg"
    },
    {
      title: "Grand Canyon Three",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "grandcanyonThree.jpg"
    },
    {
      title: "Grand Canyon Two",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "grandcanyonTwo.jpg"
    },
    {
      title: 'Green River WY',
      medium: 'Gouache',
      year: '2024',
      category: "Landscapes",
      imageUrl: 'greenRiver.png'
    },
    {
      title: "Hand Study",
      medium: "Oil",
      year: "2024",
      category: "Still Lifes",
      imageUrl: "myHandOne.jpg"
    },
    {
      title: "Horse One",
      medium: "Oil",
      year: "2024",
      category: "Horses",
      imageUrl: "horseOne.jpg"
    },
    {
      title: "Horse Two",
      medium: "Oil",
      year: "2024",
      category: "Horses",
      imageUrl: "horseTwo.jpg"
    },
    {
      title: "Landscape 1",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "landscape1.PNG"
    },
    {
      title: "Lady Figure One",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "ladyFigureOne.jpg"
    },
    {
      title: "Lady Figure Three",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "ladyFigureThree.jpg"
    },
    {
      title: "Man Portrait One",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "manPortrait.jpg"
    },
    {
      title: "Boy Portrait One",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "boyPortrait.jpg"
    },
    {
      title: "Drawing Portrait Two",
      medium: "Oil",
      year: "2024",
      category: "Drawings",
      imageUrl: "drawingPortrait2.jpg"
    },
    {
      title: "Lady Towel Head",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "ladyTowelHead.jpg"
    },
    {
      title: "Landscape Two",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "landscapeTwo.jpg"
    },
    {
      title: "Liberace 1",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "liberace1.jpg"
    },
    {
      title: "Long Beach Wa",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "longBeachWa.jpg"
    },
    {
      title: "Man Figure Charcoal One",
      medium: "Oil",
      year: "2024",
      category: "Drawings",
      imageUrl: "ManFigureCharcoalOne.jpg"
    },
    {
      title: "Lady Figure Two",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "nakedLady.jpg"
    },
    {
      title: "Lady Figure Three",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "oldLady1.jpg"
    },
    {
      title: "Lady Figure Four",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "pensiveLady.jpg"
    },
    {
      title: "Plein Air 1",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAir1.jpg"
    },
    {
      title: "Plein Air 2",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAir2.jpg"
    },
    {
      title: "Plein Air Five",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAirFive.jpg"
    },
    {
      title: "Plein Air Four",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAirFour.jpg"
    },
    {
      title: "Plein Air Six",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAirSix.jpg"
    },
    {
      title: "Lady Portrait Four",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadyFour.jpg"
    },
    {
      title: "Lady Portrait Seven",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadySeven.jpg"
    },
    {
      title: "Lady Portrait Six",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadySix.jpg"
    },
    {
      title: "Plein Air Three",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAirThree.jpg"
    },
    {
      title: "Plein Air Two",
      medium: "Oil",
      year: "2024",
      category: "Landscapes",
      imageUrl: "pleinAirTwo.jpg"
    },
    {
      title: "Portrait Five",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadyFive.jpg"
    },
    {
      title: "Portrait Four",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadyFour.jpg"
    },
    {
      title: "Portrait One",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadyOne.jpg"
    },
    {
      title: "Portrait Three",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadyThree.jpg"
    },
    {
      title: "Portrait Two",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "portraitLadyTwo.jpg"
    },
    {
      title: "Rembrandt",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "rembrandt.jpg"
    },
    {
      title: "Rembrandt Two",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "rembrandtTwo.jpg"
    },
    {
      title: "San Fran Model",
      medium: "Oil",
      year: "2024",
      category: "Figures",
      imageUrl: "sanFranModel.jpg"
    },
    {
      title: "Sargent Study",
      medium: "Oil",
      year: "2024",
      category: "Portraits",
      imageUrl: "sargentLady.jpg"
    },
    {
      title: "Still Life One",
      medium: "Oil",
      year: "2024",
      category: "Still Lifes",
      imageUrl: "stillLifeOne.jpg"
    },
    {
      title: "Still Life Two",
      medium: "Oil",
      year: "2024",
      category: "Still Lifes",
      imageUrl: "stillLifeTwo.jpg"
    },
    {
      title: "Tree Mirror",
      medium: "Oil",
      year: "2024",
      category: "Landscapse",
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
