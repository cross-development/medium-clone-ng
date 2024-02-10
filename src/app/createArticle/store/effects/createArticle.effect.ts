// Packages
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
// Store
import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from '../actions/createArticle.action';
// Services
import { CreateArticleService } from '../../services/createArticle.service';
// Types
import { ArticleInterface } from '../../../shared/types/article.interface';

@Injectable()
export class CreateArticleEffect {
  public createArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticleInput(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({ article });
          }),
          catchError(({ error }: HttpErrorResponse) => {
            return of(createArticleFailureAction({ errors: error.errors }));
          }),
        );
      }),
    );
  });

  public redirectAfterCreate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug])),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly createArticleService: CreateArticleService,
  ) {}
}
