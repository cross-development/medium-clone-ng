// Packages
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
// Store
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailuresAction,
} from '../actions/getPopularTags.action';
// Services
import { PopularTagsService } from '../../services/popularTags.service';
// Types
import { PopularTagType } from '../../../../types/popularTag.type';

@Injectable()
export class GetPopularTagsEffect {
  public getPopularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError((error: string) => {
            return of(getPopularTagsFailuresAction({ error }));
          }),
        );
      }),
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly popularTagsService: PopularTagsService,
  ) {}
}
