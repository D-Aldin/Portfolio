import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component: LegalNoticeComponent },
];
