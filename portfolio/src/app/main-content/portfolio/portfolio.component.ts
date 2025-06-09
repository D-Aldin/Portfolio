import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { PROJECTS } from './projects/projects';
import { ReviewComponent } from './review/review.component';
import { LanguageService } from '../../language';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, ReviewComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(private languageService: LanguageService) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  projects = PROJECTS;
}
