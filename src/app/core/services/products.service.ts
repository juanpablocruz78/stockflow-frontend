import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Page } from '../models/Page';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(page = 0, size = 10, search = '', sort = 'name') {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search)
      .set('sort', sort); // <--- Enviamos el criterio al backend

    return this.http.get<Page<Product>>(this.api, { params });
  }

  createProduct(product: Product) {
    return this.http.post(this.api, product);
  }

  update(id: number, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${id}`, product);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
