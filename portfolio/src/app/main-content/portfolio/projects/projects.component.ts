import { Component, Input } from '@angular/core';
import { PROJECTS } from './projects';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../language';
import { log } from 'console';

interface projects {
  name: string;
  englishDescription: string;
  germanDescription: string;
  bosnianDescription?: string; // Optional for Bosnian description
  technology: string[];
  image: string;
  pageLink: string;
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
  @Input() name?: string;

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
