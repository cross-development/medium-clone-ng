// Packages
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// Store
import { createArticleAction } from '../../store/actions/createArticle.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
// Types
import { ArticleInputInterface } from '../../../shared/types/articleInput.interface';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  public initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
