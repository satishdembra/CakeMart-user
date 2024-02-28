import { Component } from '@angular/core';
import { OrderPageService } from '../order-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent {
  constructor(
    private orderPageService: OrderPageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  orderItems: {
    order_id: number;
    customer_id: number;
    product_id: number;
    order_token: string;
    price_paid: string;
    qty: number;
    is_active: number;
    is_delete: number;
    created_at: string;
    updated_at: string;
  }[] = [];

  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/user/signin']);
    }
    this.orderPageService.getOrders().subscribe((res: any) => {
      this.orderItems = res.data;
      console.log('-------------------------- ', res.data);
    });
  }

  getProductByProductId(id: number) {}
}
