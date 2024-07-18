import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { filter, Subscription } from 'rxjs';
import { ICategory, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;

  currentUrl: string = 'home';
  storeMenuExpanded: boolean = false;
  categories: ICategory[] = this.productsService.getCategories();

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faShoppingCart = faShoppingCart;

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  //ng
  ngOnInit(): void {
    this.routeSubscription = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        const event = e as NavigationEnd;

        this.currentUrl = event.url
          .split('/')
          .filter((url) => url && url !== '')
          .shift()
          ? event.url
              .split('/')
              .filter((url) => url && url !== '')
              .shift()!
          : 'home';
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  // func
  storeClick(categoryValue: string): void {
    this.router.navigate(['/store'], {
      queryParams: { category: categoryValue },
    });
  }
}
