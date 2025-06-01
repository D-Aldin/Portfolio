import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { PROJECTS } from './projects/projects';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, ReviewComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = PROJECTS;
}
