import { Component } from '@angular/core';
import { LanguageService } from '../../language';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  sectionIsActive: string = '';

  isOnImpressum(): boolean {
    return this.router.url === '/impressum';
  }

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

  get currentLanguageActive() {
    return this.languageService.language;
  }

  generateID(str: string) {
    return str.replace(' ', '-').toLowerCase();
  }

  goTo(section: string) {
    const element = document.getElementById(section);
    const headerOffset = 100;
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    this.sectionIsActive = section;
  }
}
