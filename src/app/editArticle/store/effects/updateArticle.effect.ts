// Packages
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
// Store
import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction,
} from '../actions/updateArticle.action';
// Services
import { EditArticleService } from '../../services/editArticle.service';
// Types
import { ArticleInterface } from '../../../shared/types/article.interface';

@Injectable()
export class UpdateArticleEffect {
  public updateArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticleInput(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError(({ error }: HttpErrorResponse) => {
            return of(updateArticleFailureAction({ errors: error.errors }));
          }),
        );
      }),
    );
  });

  public redirectAfterUpdate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug])),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly editArticleService: EditArticleService,
  ) {}
}
