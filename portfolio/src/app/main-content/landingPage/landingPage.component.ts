import { Component } from '@angular/core';
import { LanguageService } from '../../language';
import { TRANSLATION } from '../../translation';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss',
})
export class LandingPageComponent {
  constructor(private languageService: LanguageService) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }
}
