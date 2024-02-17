// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// Components
import { FeedComponent } from './components/feed/feed.component';
// Services
import { FeedService } from './services/feed.service';
// Modules
import { LoadingModule } from '../loading/loading.module';
import { TagListModule } from '../tagList/tagList.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { AddToFavoritesModule } from '../addToFavorites/addToFavorites.module';
// Store
import { feedReducer } from './store/reducers';
import { GetFeedEffect } from './store/effects/getFeed.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([GetFeedEffect]),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
  ],
  exports: [FeedComponent],
  declarations: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
