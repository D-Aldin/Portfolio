import { Component } from '@angular/core';
import { HeaderComponent } from '../main-content/header/header.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {}
