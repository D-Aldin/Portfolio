import { Component } from '@angular/core';
import { LanguageService } from '../../language';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { returnImagePath } from '../../imagePath';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  @ViewChild('burger') burgerMenu!: BurgerMenuComponent;

  sectionIsActive: string = '';

  isOnImpressum(): boolean {
    return this.router.url === '/impressum';
  }

  isOnPolicy(): boolean {
    return this.router.url === '/privacyPolicy';
  }

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  switchLang(value: string) {
    if (value === 'en' || value === 'de' || value === 'bs') {
      this.languageService.language = value;
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', value);
      }
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

  translateID(str: string) {
    if (str === 'über-mich') {
      str = 'about-me';
    } else if (str === 'fähigkeiten') {
      str = 'skills';
    }
    return str;
  }

  goTo(section: string) {
    section = this.translateID(section);
    const scrollToSection = () => {
      const element = document.getElementById(section);
      const headerOffset = 100;
      if (element) {
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      this.sectionIsActive = section;
    };

    if (this.isOnImpressum() || this.isOnPolicy()) {
      this.router.navigate(['/']).then(() => {
        setTimeout(scrollToSection, 50);
      });
    } else {
      scrollToSection();
    }
  }

  get imagePath(): string {
    return returnImagePath(
      this.languageService.language,
      'assets/icons/',
      'logo',
      1
    );
  }
}
