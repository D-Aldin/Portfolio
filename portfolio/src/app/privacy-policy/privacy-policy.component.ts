import { Component } from '@angular/core';
import { HeaderComponent } from '../main-content/header/header.component';
import { LanguageService } from './../../app/language';
import { TRANSLATION } from './../../app/translation';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  translation: string = '';

  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const content = this.languageService.getCurrentTranslations();
    this.translation = content.privacyPolicy.policy[0];
  }

  get safeHTMLContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.translation);
  }
}
