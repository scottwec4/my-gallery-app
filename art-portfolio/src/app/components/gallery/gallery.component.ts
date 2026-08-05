import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ArtService, ArtItem, AwardItem } from '../../services/art.service';
import { HeaderComponent } from '../header/header.component';
import { BioComponent } from '../bio/bio.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { AwardsComponent } from '../awards/awards.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    AsyncPipe,
    HeaderComponent,
    BioComponent,
    ShowcaseComponent,
    AwardsComponent
  ],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  artGallery$!: Observable<ArtItem[]>;
  awardsList$!: Observable<AwardItem[]>;

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.artGallery$ = this.artService.getArtGallery();
    this.awardsList$ = this.artService.getAwardsList();
  }
}
