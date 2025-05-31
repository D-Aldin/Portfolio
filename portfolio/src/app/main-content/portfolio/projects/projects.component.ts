import { Component, Input } from '@angular/core';
import { PROJECTS } from './projects';
import { CommonModule } from '@angular/common';

interface projects {
  name: string;
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
  projects = PROJECTS;

  @Input({ required: true }) project!: projects;
  // @Input({ required: true }) technology: string[] = [];

  get imagePath() {
    return './../../../../assets/icons/projects/' + this.project.image + '.png';
  }
}
