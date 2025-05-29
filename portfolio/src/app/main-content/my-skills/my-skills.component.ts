import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skillsIcons = [
    './../../../assets/icons/my-skills/html.png',
    './../../../assets/icons/my-skills/css.png',
    './../../../assets/icons/my-skills/js.png',
    './../../../assets/icons/my-skills/typescript.png',
    './../../../assets/icons/my-skills/angular.png',
    './../../../assets/icons/my-skills/firebase.png',
    './../../../assets/icons/my-skills/git.png',
    './../../../assets/icons/my-skills/restapi.png',
    './../../../assets/icons/my-skills/scrum.png',
    './../../../assets/icons/my-skills/material.png',
    './../../../assets/icons/my-skills/interest.png',
  ];
}
