// Packages
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import queryString from 'query-string';
// Store
import { getFeedAction } from '../../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
// Types
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnChanges, OnDestroy {
  @Input('resourceUrl')
  public resourceUrlProps: string;

  public baseUrl: string;
  public limit: number = 10;
  public currentPage: number;

  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public feed$: Observable<GetFeedResponseInterface | null>;

  private queryParamsSubscription: Subscription;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const changedResourceUrl = changes['resourceUrlProps'];

    const isFirstChange = changedResourceUrl.firstChange;
    const isValueChanged = changedResourceUrl.currentValue !== changedResourceUrl.previousValue;

    const isResourceUrlChanged = !isFirstChange && isValueChanged;

    if (isResourceUrlChanged) {
      this.fetchFeed();
    }
  }

  public ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  private fetchFeed(): void {
    const parsedUrl = queryString.parseUrl(this.resourceUrlProps);
    const stringifiedParams = queryString.stringify({
      offset: this.currentPage * this.limit - this.limit,
      limit: this.limit,
      ...parsedUrl.query,
    });

    this.store.dispatch(getFeedAction({ url: `${parsedUrl.url}?${stringifiedParams}` }));
  }

  private initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.baseUrl = this.router.url.split('?').at(0);
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchFeed();
    });
  }
}
