// Packages
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
// Store
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../actions/getArticle.action';
// Services
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
// Types
import { ArticleInterface } from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
  public getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(({ error }: HttpErrorResponse) => {
            return of(getArticleFailureAction({ error: error.errors }));
          }),
        );
      }),
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly sharedArticleService: SharedArticleService,
  ) {}
}
