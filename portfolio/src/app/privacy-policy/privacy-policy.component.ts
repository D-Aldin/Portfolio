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
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) {}

  translation = TRANSLATION.en.privacyPolicy.policy;

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }

  get safeHTMLContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.langPath.privacyPolicy.policy[0]
    );
  }
}
