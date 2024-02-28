import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeChoclateComponent } from './home-choclate/home-choclate.component';
import { HomeBlueComponent } from './home-blue/home-blue.component';

const routes: Routes = [
  { path: '', component: ProductCatalogComponent },
  { path: 'product/details/:id', component: ProductDetailComponent },
  { path: 'cart/getAllCartItems', component: CartComponent },
  { path: 'order/payment-success', component: PaymentSuccessComponent },
  { path: 'order/order-details', component: OrderPageComponent },
  { path: 'product/review-details/:id', component: ReviewRatingComponent },
  { path: 'user/signin', component: UserSigninComponent },
  { path: 'user/signup', component: UserSignupComponent },
  { path: 'user/home', component: HomeComponent },
  { path: 'user/home-cupcake2', component: HomeChoclateComponent },
  { path: 'user/home-cupcake3', component: HomeBlueComponent },
  { path: 'user/about', component: AboutComponent },
  { path: 'user/contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
