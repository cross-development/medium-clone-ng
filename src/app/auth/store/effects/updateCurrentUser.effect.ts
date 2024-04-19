// Packages
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
// Store
import {
  updateCurrentUserAction,
  updateCurrentUserSuccessAction,
  updateCurrentUserFailureAction,
} from '../actions/updateCurrentUser.action';
// Services
import { AuthService } from '../../services/auth.service';
// Types
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

@Injectable()
export class UpdateCurrentUserEffect {
  public updateCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError(({ error }: HttpErrorResponse) => {
            return of(updateCurrentUserFailureAction({ errors: error.errors }));
          }),
        );
      }),
    );
  });

  public redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateCurrentUserSuccessAction),
        tap(({ currentUser }) => this.router.navigate(['/profiles', currentUser.username])),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly authService: AuthService,
  ) {}
}
