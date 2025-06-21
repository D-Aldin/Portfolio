import { Component, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../../scrollToContact';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) {}

  @ViewChild('legalNotice') legalNotice!: ElementRef;

  goToContact(): void {
    this.scrollService.scrollToContact();
  }
}
