import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommissionsComponent } from './components/commissions/commissions.component';
import { BioComponent } from './components/bio/bio.component';
import {GalleryComponent} from './components/gallery/gallery.component'; // Import BioComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'about', component: BioComponent },
  {path: 'artworks', component: GalleryComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
