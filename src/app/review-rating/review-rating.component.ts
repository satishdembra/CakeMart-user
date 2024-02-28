import { Component } from '@angular/core';
import { ProductDetailService } from '../product-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.css'],
})
export class ReviewRatingComponent {
  product = {
    product_id: 0,
    product_image: '',
    product_title: '',
    product_desc: '',
    product_avg_rating: 0,
    product_review_count: 0,
    product_rating_count: 0,
    product_currency: '',
    product_old_price: 0,
    product_new_lesser_price: 0,
  };

  isAddedToCart = false;
  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
     if (localStorage.getItem('isAuthenticated') === 'false') {
       this.router.navigate(['/user/signin']);
     }
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.findByProdId(id);
    });
  }
  productId = 0;

  findByProdId(id: number) {
    this.productDetailService.findByMenuId(id).subscribe((data) => {
      console.log(data.status);
      this.product = data.data[0];
      console.log(this.product.product_title);
    });
  }
  isAddedReview = false;
  selectedRating: number = 0;

  ratingCount: number = 0;
  reviewText: string = '';
  handleRatingSelected(rating: number, id: number) {
    this.selectedRating = rating;
    console.log('Selected Rating:', rating);
    console.log('id:', id);
    this.ratingCount = rating;
  }

  addReview(id: number) {
    this.productDetailService
      .giveCombinedReviewRating({
        product_id: id,
        number_star: this.ratingCount,
        rating_review_comment: this.reviewText,
      })
      .subscribe((data) => {
        console.log(data.status);
        this.product = data.data[0];
        console.log(this.product.product_title);
      });

    this.isAddedReview = true;
    setTimeout(() => {
      this.isAddedReview = false;
      location.reload()
    }, 1500);
  }
}
