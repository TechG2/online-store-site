import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit, OnDestroy {
  private cartSubscription: Subscription;

  products: IProduct[] = [];
  addedProducts: IProduct[] = [];

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ng
  ngOnInit(): void {
    this.products = this.productService.getProducts();

    const productIds: number[] = localStorage.getItem('cart')
      ? localStorage
          .getItem('cart')!
          .split(',')
          .map((id) => +id)
      : [];
    this.addedProducts = this.products.filter((product) =>
      productIds.includes(product.id)
    );

    this.cartSubscription = this.route.queryParamMap.subscribe((query) => {
      const addQuery = query.get('add');
      const removeQuery = query.get('remove');

      if (addQuery) this.addCart(+addQuery);
      if (removeQuery) this.removeCart(+removeQuery);

      this.router.navigate(['/cart']);
    });
  }
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  // func
  addCart(productId: number): void {
    const product = this.products.find((product) => product.id === productId);
    if (product) {
      localStorage.setItem(
        'cart',
        localStorage.getItem('cart')
          ? localStorage.getItem('cart')! + ',' + product.id.toString()
          : product.id.toString()
      );
    }

    const productIds: number[] = localStorage.getItem('cart')
      ? localStorage
          .getItem('cart')!
          .split(',')
          .map((id) => +id)
      : [];
    this.addedProducts = [];
    for (const productId of productIds) {
      const product = this.products.find((product) => product.id === productId);
      if (product) this.addedProducts.push(product);
    }
  }
  removeCart(index: number): void {
    const items = localStorage.getItem('cart');
    if (items && items.includes(index.toString())) {
      const ids: number[] = items.split(',').map((id) => +id);
      const id: number = ids[index];
      if (id) {
        ids.splice(index, 1);
        localStorage.setItem('cart', ids.join(','));
      }
    }

    const productIds: number[] = localStorage.getItem('cart')
      ? localStorage
          .getItem('cart')!
          .split(',')
          .map((id) => +id)
      : [];
    this.addedProducts = [];
    for (const productId of productIds) {
      const product = this.products.find((product) => product.id === productId);
      if (product) this.addedProducts.push(product);
    }
  }
}
