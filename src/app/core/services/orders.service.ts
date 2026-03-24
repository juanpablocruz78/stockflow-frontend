import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

export interface Page<T> {
  content: T[]
  totalPages: number
  totalElements: number
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private api = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  getOrders(page: number, size: number) {
    return this.http.get<any>(`${this.api}?page=${page}&size=${size}`);
  }
}
