import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsStore } from '../../../core/stores/products.store';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  loading = signal(false);
  isEdit = signal(false);
  productId!: number;
  form: any;

  constructor(
    private fb: FormBuilder,
    private service: ProductsService,
    private router: Router,
    public store: ProductsStore,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      stock: [0, Validators.required],
    });
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.isEdit.set(true);
        this.productId = +id;
        this.loadProduct();
      }
    });
  }

  loadProduct() {
    this.loading.set(true);

    this.service.getById(this.productId).subscribe({
      next: (p) => this.form.patchValue(p),
      complete: () => this.loading.set(false)
    });
  }

  save() {
    if (this.form.invalid) return;

    this.loading.set(true);

    const request = this.isEdit()
      ? this.service.update(this.productId, this.form.value)
      : this.service.createProduct(this.form.value);

    request.subscribe({
      next: () => {
        this.store.load(0); //  refresca lista
        this.router.navigate(['/products']);
      },
      complete: () => this.loading.set(false)
    });
  }
}
