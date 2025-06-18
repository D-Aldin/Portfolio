import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../language';
import { ScrollService } from '../../scrollToContact';
import { CommonModule } from '@angular/common';
import { HostListener, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss',
})
export class LandingPageComponent implements OnInit {
  width: number = 1920; // Default value
  imageWidth: number = 23.51;

  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  goToContact(): void {
    this.scrollService.scrollToContact();
  }

  get currentLang() {
    return this.languageService.language;
  }

  get currentWindowSize() {
    return this.width;
  }

  ngOnInit() {
    this.updateWindowSize();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.updateWindowSize();
  }

  private updateWindowSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.width = window.innerWidth;
    }
  }

  get currentWidth() {
    return this.width;
  }

  transformStyle() {
    const baseWidth = 1920;
    const baseOffset = 36.51;

    console.log(this.width);

    let adjustedOffset: number;

    if (this.width < baseWidth) {
      const widthDifference = baseWidth - this.width;
      adjustedOffset = baseOffset + widthDifference * 0.0478;
    } else {
      adjustedOffset = baseOffset;
    }

    return {
      transform: `translate(-50%, -${adjustedOffset}%)`,
    };
  }
}
