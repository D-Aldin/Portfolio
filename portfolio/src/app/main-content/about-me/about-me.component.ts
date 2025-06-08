import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language';
import { TRANSLATION } from '../../translation';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(private languageService: LanguageService) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  aboutBlocks = [
    {
      icon: '../../../assets/icons/about/Capa_small.png',
      alt: 'location',
      text: `I’m currently living in Frankfurt am Main, a city I really enjoy—but 
             I’m also very open when it comes to how and where I work. Whether it’s working remotely, 
             collaborating in a hybrid setup, or even relocating for the right opportunity, I’m flexible and excited about new experiences. 
             What matters most to me is being part of a team where I can grow, contribute, and build meaningful projects.`,
      cssClass: 'location',
    },
    {
      icon: '../../../assets/icons/about/Vector_small.png',
      alt: 'light-bulb',
      text: `I’m always curious and open to learning something new. Whether it’s a new tech, tool, or way of working, 
             I enjoy challenging myself and picking up new skills. I love the feeling of growth and seeing how each step improves my work.`,
      cssClass: 'improving',
    },
    {
      icon: '../../../assets/icons/about/puzzle_small.png',
      alt: 'puzzle',
      text: `When I face a problem, I like to mix analytical thinking with creativity to find the best solution. I enjoy breaking things down and exploring different ideas, and 
      I’m always open to collaborating with others to get fresh perspectives. Every challenge teaches me something new, and I use that to keep growing and getting better.`,
      cssClass: 'problem-solving',
    },
  ];
}
