import { Component } from '@angular/core';
import { LanguageService } from '../../language';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

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

  toggleBurger() {}
}
