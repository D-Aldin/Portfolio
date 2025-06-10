import { Component } from '@angular/core';
import { LanguageService } from '../../language';
import { ScrollService } from '../../scrollToContact';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss',
})
export class LandingPageComponent {
  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService
  ) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  goToContact(): void {
    this.scrollService.scrollToContact();
  }
}
