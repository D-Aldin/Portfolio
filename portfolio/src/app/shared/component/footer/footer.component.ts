import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../../scrollToContact';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) {}

  goToContact(): void {
    this.scrollService.scrollToContact();
  }
}
