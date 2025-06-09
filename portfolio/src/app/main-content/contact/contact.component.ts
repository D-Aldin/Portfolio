import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguageService } from '../../language';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private languageService: LanguageService) {}

  get langPath() {
    return this.languageService.getCurrentTranslations();
  }
}
