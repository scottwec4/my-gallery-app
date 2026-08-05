import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './bio.component.html'
})
export class BioComponent {}
