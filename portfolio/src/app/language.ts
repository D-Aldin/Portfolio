import { Injectable } from '@angular/core';
import { TRANSLATION } from './translation';

type LanguageKey = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: LanguageKey = 'en';
  langLink = TRANSLATION;

  getCurrentTranslations() {
    return this.langLink[this.language];
  }

  constructor() {
    this.getCurrentTranslations();
  }
}
