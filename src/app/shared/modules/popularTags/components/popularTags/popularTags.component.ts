// Packages
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// Store
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import { errorSelector, isLoadingSelector, popularTagsSelector } from '../../store/selectors';
// Types
import { PopularTagType } from '../../../../types/popularTag.type';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  public popularTags$: Observable<PopularTagType[] | null>;
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
