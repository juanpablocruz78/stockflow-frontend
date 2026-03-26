import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DashboardStore } from '../../../core/stores/dashboard.store';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public store: DashboardStore) {}

  ngOnInit() {
    this.store.load();
  }
}
