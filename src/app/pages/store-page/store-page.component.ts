import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import {
  ICategory,
  IProduct,
  ProductsService,
} from '../../services/products.service';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css',
})
export class StorePageComponent implements OnInit, OnDestroy {
  private productsSubscription: Subscription;
  private searchSubscription: Subscription;
  private querySubscription: Subscription;

  searchForm = new FormGroup<{
    searchControl: FormControl<string | null>;
    categoryControl: FormControl<string | null>;
  }>({
    searchControl: new FormControl<string>('', []),
    categoryControl: new FormControl<string | null>(null, []),
  });

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: ICategory[] = [];
  categoryFilterOpen: boolean = false;

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faX = faX;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  // ng
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
    this.categories = this.productsService.getCategories();
    this.productsSubscription = this.productsService.products.subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      }
    );

    this.querySubscription = this.route.queryParamMap.subscribe((query) => {
      const categoryValue = query.get('category');
      const searchValue = query.get('search');

      this.searchForm.setValue({
        categoryControl: categoryValue,
        searchControl: searchValue,
      });

      if (categoryValue)
        this.filteredProducts = this.products.filter(
          (product) => product.category === categoryValue
        );
      else this.filteredProducts = this.products;

      if (searchValue)
        this.filteredProducts = this.filteredProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchValue!.toLowerCase()) ||
            product.id.toString() === searchValue!.toLowerCase() ||
            product.category === searchValue!.toLowerCase()
        );
    });

    this.searchSubscription = this.searchForm.valueChanges.subscribe(
      (value) => {
        console.log(value);

        if (value.categoryControl)
          this.filteredProducts = this.products.filter(
            (product) => product.category === value.categoryControl
          );
        else this.filteredProducts = this.products;

        this.filteredProducts = this.filteredProducts.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(value.searchControl!.toLowerCase()) ||
            product.id.toString() === value.searchControl!.toLowerCase() ||
            product.category === value.searchControl!.toLowerCase()
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

  // func
  buyClick(productId: number): void {
    this.productsService.addCart(productId);
  }
}
