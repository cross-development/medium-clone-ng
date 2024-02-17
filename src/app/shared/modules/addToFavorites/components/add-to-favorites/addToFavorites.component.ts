// Packages
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// Store
import { addToFavoritesAction } from '../../store/actions/addToFavorites.action';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited')
  public isFavoritedProps: boolean;

  @Input('favoritesCount')
  public favoritesCountProps: number;

  @Input('articleSlug')
  public articleSlugProps: string;

  public favoritesCount: number = 5;
  public isFavorited: boolean;

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  public handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      }),
    );

    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}
