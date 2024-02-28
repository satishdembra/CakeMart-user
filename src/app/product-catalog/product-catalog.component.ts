import { Component } from '@angular/core';
import { ProductCatalogService } from '../product-catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCatalog } from '../product-catalog';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
})
export class ProductCatalogComponent {
  public isLoaded = false;
  constructor(
    private productCatalogService: ProductCatalogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  filterString1: string = '';
  products: ProductCatalog[] = [];
  ngOnInit() {
    this.productCatalogService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      console.log('-------------------------- ', res.data);
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
  }
}
