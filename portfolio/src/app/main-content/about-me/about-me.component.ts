import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language';
import { returnImagePath } from '../../imagePath';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(private languageService: LanguageService) {}

  // imagePathPurpleEN = './../../../assets/img/aboutImages/purple-en.png';

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  aboutBlocks = [
    {
      icon: '../../../assets/icons/about/Capa_small.png',
      alt: 'location',
      cssClass: 'location',
    },
    {
      icon: '../../../assets/icons/about/Vector_small.png',
      alt: 'light-bulb',
      cssClass: 'improving',
    },
    {
      icon: '../../../assets/icons/about/puzzle_small.png',
      alt: 'puzzle',
      cssClass: 'problem-solving',
    },
  ];

  get imagePath(): string {
    return returnImagePath(
      this.languageService.language,
      './../../../assets/img/aboutImages/',
      'aboutMe'
    );
  }

  get currentLang() {
    return this.languageService.language;
  }
}
