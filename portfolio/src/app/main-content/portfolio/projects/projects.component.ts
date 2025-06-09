import { Component, Input } from '@angular/core';
import { PROJECTS } from './projects';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../language';

interface projects {
  name: string;
  englishDescription: string;
  germanDescription: string;
  technology: string[];
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private languageService: LanguageService) {}

  projects = PROJECTS;
  @Input() isReversed?: boolean;
  @Input({ required: true }) project!: projects;

  get imagePath() {
    return (
      './../../../../assets/icons/portfolio/projects/' +
      this.project.image +
      '.png'
    );
  }

  get currentLanguage() {
    return this.languageService.language;
  }
}
