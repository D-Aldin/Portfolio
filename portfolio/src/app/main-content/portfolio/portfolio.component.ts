import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { PROJECTS } from './projects/projects';
import { ReviewComponent } from './review/review.component';
import { LanguageService } from '../../language';
import { OnInit, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, ReviewComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out',
          offset: 100,
        });
        AOS.refresh();
      });
    }
  }

  projects = PROJECTS;
}
