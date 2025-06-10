import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToContact(): void {
    const el = document.getElementById('contact');
    const headerOffset = 100;
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
