import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  activeRating: number = 0;

  @Output() ratingSelected = new EventEmitter<number>();

  setRating(rating: number) {
    this.activeRating = rating;
    this.ratingSelected.emit(rating);
  }
}
