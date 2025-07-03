import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TRANSLATION } from './translation';

type LanguageKey = 'en' | 'de' | 'bs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: LanguageKey = 'en';
  langLink = TRANSLATION;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem('lang') as LanguageKey;
      if (storedLang === 'en' || storedLang === 'de' || storedLang === 'bs') {
        this.language = storedLang;
      }
    }

    this.getCurrentTranslations();
  }

  getCurrentTranslations() {
    return this.langLink[this.language];
  }

  setLanguage(lang: LanguageKey) {
    this.language = lang;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
