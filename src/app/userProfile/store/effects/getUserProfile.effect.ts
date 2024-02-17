// Packages
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
// Store
import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction,
} from '../actions/getUserProfile.action';
// Services
import { UserProfileService } from '../../services/userProfile.service';
// Types
import { ProfileInterface } from '../../../shared/types/profile.interface';

@Injectable()
export class GetUserProfileEffect {
  public getUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: ProfileInterface) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError((error: string) => {
            return of(getUserProfileFailureAction({ error }));
          }),
        );
      }),
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly userProfileService: UserProfileService,
  ) {}
}
