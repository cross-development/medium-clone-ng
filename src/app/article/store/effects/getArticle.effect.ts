// Packages
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
// Store
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../actions/getArticle.action';
// Services
import { ArticleService } from '../../../shared/services/article.service';
// Types
import { ArticleInterface } from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
  public getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError((error: string) => {
            return of(getArticleFailureAction({ error }));
          }),
        );
      }),
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly articleService: ArticleService,
  ) {}
}
