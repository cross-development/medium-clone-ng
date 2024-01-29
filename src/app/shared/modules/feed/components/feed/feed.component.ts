// Packages
import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// Store
import { getFeedAction } from '../../store/actions/getFeed.action';
// Types
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('resourceUrl')
  public resourceUrlProps: string;

  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public feed$: Observable<GetFeedResponseInterface | null>;

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.fetchFeedData();
  }

  private fetchFeedData(): void {
    this.store.dispatch(getFeedAction({ url: this.resourceUrlProps }));
  }

  private initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
}
