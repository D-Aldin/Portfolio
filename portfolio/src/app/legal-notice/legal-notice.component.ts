import { Component } from '@angular/core';
import { HeaderComponent } from '../main-content/header/header.component';
import { LanguageService } from './../../app/language';
import { TRANSLATION } from './../../app/translation';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  constructor(private languageService: LanguageService) {}

  translation = TRANSLATION.en.legalNotice;

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }
}
