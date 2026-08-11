import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-commissions-component',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NgOptimizedImage],
  templateUrl: './commissions.component.html',
  styleUrl: './commissions.component.css',
})
export class CommissionsComponent {}
