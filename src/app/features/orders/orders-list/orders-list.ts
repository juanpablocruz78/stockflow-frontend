import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../../core/models/order';
import { OrdersStore } from '../../../core/stores/orders.store';

@Component({
  selector: 'app-orders-list',
  imports: [CommonModule],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.css',
})
export class OrdersList {
  
  constructor(public store: OrdersStore) {}

  ngOnInit() {
    this.store.load();
  }
}
