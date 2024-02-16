// Packages
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
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

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
  ) {}
}
