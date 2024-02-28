import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-blue',
  templateUrl: './home-blue.component.html',
  styleUrls: ['./home-blue.component.css'],
})
export class HomeBlueComponent {
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
      : this.isLoggedIn;
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
  handleClick(imgId: string) {}
}
