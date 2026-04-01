import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface Page<T> {
  content: T[]
  totalPages: number
  totalElements: number
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private api = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  getOrders(page: number, size: number, sort: string = 'id') {
    return this.http.get<any>(`${this.api}?page=${page}&size=${size}&sort=${sort}`);
  }
}
