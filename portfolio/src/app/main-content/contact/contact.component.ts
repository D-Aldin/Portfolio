import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguageService } from '../../language';
import { returnImagePath } from '../../imagePath';

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

  get imagePath(): string {
    return returnImagePath(
      this.languageService.language,
      './../../../assets/img/footer/',
      'footer'
    );
  }
}
