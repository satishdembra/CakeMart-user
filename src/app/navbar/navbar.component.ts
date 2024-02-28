import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private navbarService: NavbarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  isLoggedIn = false;
  first_name: string | null = '';
  imageUrl: string | null = '';
  cartQty: number | undefined = 0;
  ngOnInit() {
    localStorage.getItem('isAuthenticated') === 'true'
      ? (this.isLoggedIn = true)
      : this.isLoggedIn=false;
    this.first_name = localStorage.getItem('first_name');
    this.imageUrl = localStorage.getItem('profile_pic');
    if (localStorage.getItem('isAuthenticated') === 'true') {
      this.navbarService.getCartItemsCount().subscribe((res) => {
        this.cartQty = res.data.countProductInCart[0].Count;
      });
    }
  }

  logOut() {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_pic');
    localStorage.removeItem('first_name');
  }
}
