import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-commissions-component',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './commissions.component.html',
  styleUrl: './commissions.component.css',
})
export class CommissionsComponent {}
