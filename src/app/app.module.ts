import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SearchPipePipe, SearchPipePipe1 } from './search-pipe.pipe';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HomeChoclateComponent } from './home-choclate/home-choclate.component';
import { HomeBlueComponent } from './home-blue/home-blue.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    ProductDetailComponent,
    CartComponent,
    PaymentSuccessComponent,
    NavbarComponent,
    OrderPageComponent,
    ReviewRatingComponent,
    StarRatingComponent,
    SearchPipePipe,
    SearchPipePipe1,
    UserSigninComponent,
    UserSignupComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeChoclateComponent,
    HomeBlueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
