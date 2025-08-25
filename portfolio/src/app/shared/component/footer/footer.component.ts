import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../../scrollToContact';
import { ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../../language';
import { returnImagePath } from '../../../imagePath';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(
    private scrollService: ScrollService,
    private languageService: LanguageService
  ) {}

  @ViewChild('legalNotice') legalNotice!: ElementRef;

  goToContact(): void {
    this.scrollService.scrollToContact();
  }

  get currentLang() {
    return this.languageService.language;
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
