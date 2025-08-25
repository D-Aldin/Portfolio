import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Renderer2, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../../language';
import { returnImagePath } from '../../../imagePath';

import { Input } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  constructor(
    private renderer: Renderer2,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  isOpen: boolean = false;

  @Input() goToFn!: (section: string) => void;
  @Input() switchLang!: (lang: string) => void;

  toogleMenuBurger() {
    this.isOpen = !this.isOpen;
    this.preventScrolling();
    console.log(this.isOpen);
    if (this.isOpen) {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  preventScrolling() {
    if (this.isOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    }
  }

  navigateToSection(section: string, delay: number = 500) {
    this.renderer.removeClass(document.body, 'no-scroll');
    this.goToFn(section);
    setTimeout(() => {
      this.isOpen = false;
    }, delay);
  }

  get langPath() {
    return this.languageService.getCurrentTranslations();
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
