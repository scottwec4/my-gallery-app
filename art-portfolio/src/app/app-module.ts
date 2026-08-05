import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommissionsComponent } from './components/commissions/commissions.component';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeComponent, // Move here because it's standalone!
    HeaderComponent, // Move here because it's standalone!
    GalleryComponent,
    CommissionsComponent,
  ],
  bootstrap: [App],
})
export class AppModule {}
