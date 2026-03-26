import { Injectable, signal } from "@angular/core";
import { DashboardService } from "../services/dashboard-service";

@Injectable({ providedIn: 'root' })
export class DashboardStore {

  private _data = signal<any>(null);
  readonly data = this._data.asReadonly();

  private _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  constructor(private service: DashboardService) {}

  load() {
    this._loading.set(true);
    this._error.set(null);

    this.service.getSummary().subscribe({
      next: (res) => this._data.set(res),
      error: () => this._error.set('Error loading dashboard'),
      complete: () => this._loading.set(false)
    });
  }
}
