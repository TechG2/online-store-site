import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface ICategory {
  label: string;
  value: 'hiking' | 'camping' | 'climbing' | 'water_sports';
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  category: 'hiking' | 'camping' | 'climbing' | 'water_sports';
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private currentProducts: IProduct[] = [];
  private categories: ICategory[] = [
    {
      label: 'Hiking',
      value: 'hiking',
    },
    {
      label: 'Camping',
      value: 'camping',
    },
    {
      label: 'Climbing',
      value: 'climbing',
    },
    {
      label: 'Water Sports',
      value: 'water_sports',
    },
  ];

  products: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();

  constructor(private router: Router) {}

  // func
  setProducts(products: IProduct[]): void {
    this.products.emit(products);
    this.currentProducts = products;
  }
  addProduct(product: IProduct): void {
    this.products.emit([...this.getProducts(), product]);
    this.currentProducts = [...this.getProducts(), product];
  }

  addCart(productId: number): void {
    this.router.navigate(['cart'], { queryParams: { add: productId } });
  }

  getProducts(): IProduct[] {
    return this.currentProducts;
  }
  getProduct(index: number): IProduct | null {
    return this.currentProducts[index];
  }

  getCategories(): ICategory[] {
    return this.categories;
  }
}
