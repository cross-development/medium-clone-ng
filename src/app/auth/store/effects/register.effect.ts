// Packages
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
// Store
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
// Services
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
// Types
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

@Injectable()
export class RegisterEffect {
  public register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);

            return registerSuccessAction({ currentUser });
          }),
          catchError(({ error }: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: error.errors }));
          }),
        );
      }),
    );
  });

  public redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => this.router.navigateByUrl('/')),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly persistanceService: PersistenceService,
  ) {}
}
