import { Component } from '@angular/core';
import { REVIEW_DATA } from './review-data';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../language';
import { returnImagePath } from '../../../imagePath';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent {
  constructor(private languageService: LanguageService) {}

  reviews = REVIEW_DATA;
  review: string = '';
  name: string = '';
  counter: number = 0;
  selectedReview: number = 0;

  nextReview(): void {
    this.counter++;
    if (this.counter >= this.reviews.length) {
      this.counter = 0;
    }
    this.selectedReview = this.counter;
  }

  backReview(): void {
    this.selectedReview = this.counter;
    if (this.counter <= 0) {
      this.counter = this.reviews.length - 1;
    } else {
      this.counter--;
    }
  }

  get currentLanguage() {
    return this.languageService.language;
  }

  get imageExclamation(): string {
    return returnImagePath(
      this.languageService.language,
      './../../../../assets/icons/portfolio/review/',
      'exclamation',
      1
    );
  }

  get imageLeft(): string {
    return returnImagePath(
      this.languageService.language,
      './../../../../assets/icons/portfolio/review/',
      'left',
      1
    );
  }

  get imageRight(): string {
    return returnImagePath(
      this.languageService.language,
      './../../../../assets/icons/portfolio/review/',
      'right',
      1
    );
  }
}
