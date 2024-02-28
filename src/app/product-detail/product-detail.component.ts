import { Component } from '@angular/core';
import { ProductDetailService } from '../product-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
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
  comments: {
    product_id: 0;
    rating_review_id: number;
    customer_name: string;
    number_star: string;
    rating_review_comment: string;
    created_at_month: string;
    created_at_year: string;
  }[] = [];

  isAddedToCart = false;
  constructor(
    private navbarService: NavbarService,
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
      this.getOthersComment(id);
    });
  }
  productId = 0;
  addToCart() {
    this.isAddedToCart = true;
    this.productId = this.product.product_id;
    this.productDetailService
      .addToCart({
        product_id: this.productId,
        qty: this.quantity,
      })
      .subscribe((data) => {
        console.log(data.data);
      });
  }
  findByProdId(id: number) {
    this.productDetailService.findByMenuId(id).subscribe((data) => {
      console.log(data.status);
      this.product = data.data[0];
      console.log(this.product.product_title);
    });
  }
  getOthersComment(id: number) {
    this.productDetailService.readOthersComment(id).subscribe((data) => {
      console.log(data.data);
      this.comments = data.data;
      console.log(this.comments);
    });
  }

  quantity: number = 1;

  increment() {
    if (this.quantity < 100) {
      this.quantity++;
    }
    if (this.quantity > 10) {
      this.quantity = 10;
      alert('Maximum quantity allowed is 10');
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
