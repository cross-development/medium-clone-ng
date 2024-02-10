// Packages
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
// Store
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { updateArticleAction } from '../../store/actions/updateArticle.action';
// Types
import { ArticleInterface } from '../../../shared/types/article.interface';
import { ArticleInputInterface } from '../../../shared/types/articleInput.interface';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  private slug: string;

  public initialValues$: Observable<ArticleInputInterface>;
  public isLoading$: Observable<boolean>;
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => ({
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      })),
    );
  }

  public onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
