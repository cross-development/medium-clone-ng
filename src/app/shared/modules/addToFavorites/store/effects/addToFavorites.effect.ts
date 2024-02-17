// Packages
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
// Store
import {
  addToFavoritesAction,
  addToFavoritesSuccessAction,
  addToFavoritesFailureAction,
} from '../actions/addToFavorites.action';
// Services
import { AddToFavoritesService } from '../../services/addToFavorites.service';
// Types
import { ArticleInterface } from '../../../../types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  public addToFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFromFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug);

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError((error: string) => {
            return of(addToFavoritesFailureAction({ error }));
          }),
        );
      }),
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly addToFavoritesService: AddToFavoritesService,
  ) {}
}
