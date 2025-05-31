import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { PROJECTS } from './projects/projects';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = PROJECTS;
}
