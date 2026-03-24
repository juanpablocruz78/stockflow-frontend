import { Injectable, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  number: number;
}

@Injectable({ providedIn: 'root' })
export class ProductsStore {
  private searchTimeout: any;
  private _products = signal<Product[]>([]);
  readonly products = this._products.asReadonly();

  private _page = signal(0);
  readonly page = this._page.asReadonly();

  private _totalPages = signal(0);
  readonly totalPages = this._totalPages.asReadonly();

  private _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  private _search = signal('');
  readonly search = this._search.asReadonly();

  private _sort = signal<'name' | 'price'>('name');

  constructor(private service: ProductsService) {}

  load(page = 0) {
    this._loading.set(true);
    this._error.set(null);

    this.service.getProducts(page, 10, this._search()).subscribe({
      next: (res) => {
        this._products.set(res.content);
        this._totalPages.set(res.totalPages);
        this._page.set(res.number);
      },
      error: () => {
        this._error.set('Error loading products');
      },
      complete: () => this._loading.set(false),
    });
  }

  nextPage() {
    if (this._page() < this._totalPages() - 1) {
      this.load(this._page() + 1);
    }
  }

  prevPage() {
    if (this._page() > 0) {
      this.load(this._page() - 1);
    }
  }

  refresh() {
    this.load(this._page());
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.refresh();
    });
  }

setSort(sort: 'name' | 'price') {
  this._sort.set(sort);
  this.load(0);
}

  setSearch(value: string) {
    this._search.set(value);

    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.load(0);
    }, 300);
  }
}
