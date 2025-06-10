import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language';
import { ScrollService } from '../../scrollToContact';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService
  ) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  skillsIcons = [
    './../../../assets/icons/my-skills/html-icon.png',
    './../../../assets/icons/my-skills/css-icon.png',
    './../../../assets/icons/my-skills/js-icon.png',
    './../../../assets/icons/my-skills/ts-icon.png',
    './../../../assets/icons/my-skills/angular-icon.png',
    './../../../assets/icons/my-skills/firebase-icon.png',
    './../../../assets/icons/my-skills/git-icon.png',
    './../../../assets/icons/my-skills/api-icon.png',
    './../../../assets/icons/my-skills/scrum-icon.png',
    './../../../assets/icons/my-skills/material-icon.png',
    // './../../../assets/icons/my-skills/learning-icon.png',
  ];

  skillsIconName = [
    './../../../assets/icons/my-skills/html-text.png',
    './../../../assets/icons/my-skills/css-text.png',
    './../../../assets/icons/my-skills/js-text.png',
    './../../../assets/icons/my-skills/ts-text.png',
    './../../../assets/icons/my-skills/angular-text.png',
    './../../../assets/icons/my-skills/firebase-text.png',
    './../../../assets/icons/my-skills/git-text.png',
    './../../../assets/icons/my-skills/api-text.png',
    './../../../assets/icons/my-skills/scrum-text.png',
    './../../../assets/icons/my-skills/material-text.png',
    // './../../../assets/icons/my-skills/learning-text.png',
  ];

  goToContact(): void {
    this.scrollService.scrollToContact();
  }
}
