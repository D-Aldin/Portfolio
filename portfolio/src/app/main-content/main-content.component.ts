import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent, AboutMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
