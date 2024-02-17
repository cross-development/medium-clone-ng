// Packages
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
// Store
import { logoutAction } from '../actions/sync.actions';
// Services
import { PersistenceService } from '../../../shared/services/persistence.service';

@Injectable()
export class LogoutEffect {
  public logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '');
          this.router.navigateByUrl('/');
        }),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly persistanceService: PersistenceService,
  ) {}
}
