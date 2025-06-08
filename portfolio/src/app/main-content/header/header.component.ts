import { Component } from '@angular/core';
import { LanguageService } from '../../language';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  switchLang(value: string) {
    if (value === 'en' || value === 'de') {
      this.languageService.language = value;
    } else {
      console.warn(`Unsupported language: ${value}`);
    }
  }
}
