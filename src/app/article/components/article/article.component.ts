// Packages
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, combineLatest, map } from 'rxjs';
// Store
import { currentUserSelector } from '../../../auth/store/selectors';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/selectors';
// Types
import { ArticleInterface } from '../../../shared/types/article.interface';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  private slug: string;
  public article: ArticleInterface | null;

  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public isAuthor$: Observable<boolean>;

  private articleSubscription: Subscription;

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
    this.initializeListeners();
  }

  public ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
        return !article || !currentUser
          ? false
          : article?.author?.username === currentUser?.username;
      }),
    );
  }

  private initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface) => {
        this.article = article;
      });
  }
}
