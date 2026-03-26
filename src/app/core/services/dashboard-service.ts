import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
   private api = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getSummary() {
    return this.http.get<any>(`${this.api}/summary`);
  }
}
