// Packages
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
// Store
import {
  deleteArticleAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction,
} from '../actions/deleteArticle.action';
// Services
import { ArticleService } from '../../services/article.service';

@Injectable()
export class DeleteArticleEffect {
  public deleteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),
          catchError((error: string) => {
            return of(deleteArticleFailureAction({ error }));
          }),
        );
      }),
    );
  });

  public redirectAfterDelete$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(deleteArticleAction),
        tap(() => this.router.navigate(['/'])),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly articleService: ArticleService,
  ) {}
}
