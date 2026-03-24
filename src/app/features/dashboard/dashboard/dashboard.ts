import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  totalOrders = signal(1200);
  revenue = signal(54000);
  pendingOrders = signal(23);
}
