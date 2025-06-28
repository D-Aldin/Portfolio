import { Component, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language';
import { ScrollService } from '../../scrollToContact';
import { ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements OnInit, AfterViewInit {
  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @ViewChild('stack') stack!: ElementRef;
  @ViewChild('anotherSkill') anotherSkill!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChildren('icon') icons!: QueryList<ElementRef>;
  @ViewChild('mobileView') mobileView!: ElementRef;
  @ViewChild('bubble') bubble!: ElementRef;
  windowWidth: number = 0;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  ngAfterViewInit() {
    this.repositionElements();
    const lastElement = this.icons.toArray()[9]?.nativeElement;
    this.moveGridElements(lastElement);
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: Event) {
    this.windowWidth = (event.target as Window).innerWidth;
    this.repositionElements();
  }

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

  repositionElements() {
    if (this.windowWidth < 570) {
      const anotherSkillParent = this.renderer.parentNode(
        this.anotherSkill.nativeElement
      );
      this.renderer.insertBefore(
        anotherSkillParent,
        this.stack.nativeElement,
        this.anotherSkill.nativeElement
      );
    } else {
      const skillsParent = this.renderer.parentNode(this.skills.nativeElement);
      this.renderer.insertBefore(
        skillsParent,
        this.stack.nativeElement,
        this.skills.nativeElement
      );
    }
  }

  moveGridElements(element: HTMLElement) {
    if (this.windowWidth < 570) {
      this.mobileView.nativeElement.appendChild(element);
      this.mobileView.nativeElement.appendChild(this.bubble.nativeElement);
    }
  }
}
