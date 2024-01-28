// Packages
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// Store
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
