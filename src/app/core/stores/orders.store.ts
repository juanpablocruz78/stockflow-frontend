import { Injectable, signal } from '@angular/core';
import { OrdersService } from '../services/orders.service';

export interface Order {
  id: number;
  status: string;
  totalAmount: number;
}

@Injectable({ providedIn: 'root' })
export class OrdersStore {

  private pageSize = 10;

  private _orders = signal<Order[]>([]);
  readonly orders = this._orders.asReadonly();

  private _totalPages = signal(0);
  readonly totalPages = this._totalPages.asReadonly();

  private _page = signal(0);
  readonly page = this._page.asReadonly();

  private _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  constructor(private service: OrdersService) {}

  load(page = 0) {
    this._loading.set(true);
    this._error.set(null);
    this._page.set(page);

    this.service.getOrders(page, this.pageSize).subscribe({
      next: (res) => {
        this._orders.set(res.content);
        this._totalPages.set(res.totalPages);
      },
      error: () => {
        this._error.set("Error loading orders");
        this._loading.set(false);
      },
      complete: () => this._loading.set(false)
    });
  }
  nextPage() {
    this.load(this._page() + 1);
  }

  prevPage() {
    this.load(this._page() - 1);
  }
}
