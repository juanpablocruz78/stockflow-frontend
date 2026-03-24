import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsStore } from '../../../core/stores/products.store';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  selectedToDelete = signal<number | null>(null);
  constructor(
    public store: ProductsStore,
    private router: Router,
  ) {}

  ngOnInit() {
    this.store.load();
  }

  createProduct() {
    this.router.navigate(['/products/new']);
  }

  editProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

  openDelete(id: number) {
    this.selectedToDelete.set(id);
  }

  confirmDelete() {
    if (this.selectedToDelete()) {
      this.store.delete(this.selectedToDelete()!);
      this.selectedToDelete.set(null);
    }
  }
}
