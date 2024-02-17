// Packages
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription, combineLatest, filter, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
// Store
import { currentUserSelector } from '../../../auth/store/selectors';
import { getUserProfileAction } from '../../store/actions/getUserProfile.action';
import { errorSelector, isLoadingSelector, userProfileSelector } from '../../store/selectors';
// Types
import { ProfileInterface } from '../../../shared/types/profile.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private slug: string;
  public resourceUrl: string;
  public userProfile: ProfileInterface;

  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public isCurrentUserProfile$: Observable<boolean>;

  private userProfileSubscription: Subscription;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  public ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(map(([currentUser, userProfile]) => currentUser.username === userProfile.username));
  }

  private initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile;
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];

      this.fetchUserProfile();
    });
  }

  private fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  public getResourceUrl(): string {
    const isFavorites = this.router.url.includes('favorites');

    this.resourceUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;

    return this.resourceUrl;
  }
}
