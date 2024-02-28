import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  cartItems: Cart[] = [];
  mrp: number = 0;
  price_to_pay: number = 0;
  money_saved: number = 0;
  handler: any = null;

  inputData: {
    product_id: string;
    order_token: string;
    price_paid: string;
    qty: string;
  }[] = [];

  ngOnInit() {
     if (localStorage.getItem('isAuthenticated') === 'false') {
       this.router.navigate(['/user/signin']);
     }
    this.cartService.getAllCartItems().subscribe((res: any) => {
      this.cartItems = res.data;
      this.mrp = res.mrp;
      this.price_to_pay = res.price_to_pay;
      this.money_saved = res.money_saved;
      console.log('-------------------------- ', res.data);
    });
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe((res: any) => {
      location.reload();
    });
  }

  pay(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: (token: any) => {
        this.inputData = this.cartItems.map((item) => {
          return {
            product_id: item.product_id.toString(),
            price_paid: this.price_to_pay.toString(),
            qty: item.qty.toString(),
            order_token: token.id,
          };
        });

        console.log('inputData in ----------------------- ', this.inputData);
        console.log('cartItems in ----------------------- ', this.cartItems);

        this.cartService.placeOrder(this.inputData).subscribe((res: any) => {
          console.log('-------------------------- ', res.data);
        });

        this.router.navigate(['/order/payment-success', token]);
      },
    });

    handler.open({
      name: 'Cake Kart',
      description: 'Enjoy the best cupcakes with the most secure payment',
      amount: amount * 100,
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'en',
          currency: 'INR',
          style: {
            // Reference your custom CSS file here
            cssSrc: './payment.component.css',
          },
          token: function (token: any) {
            console.log(token);
            alert('Payment Success!!');
          },
        });
      };

      window.document.body.appendChild(s);
    }
  }
}
