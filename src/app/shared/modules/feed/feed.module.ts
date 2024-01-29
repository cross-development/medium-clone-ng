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
// Store
import { feedReducer } from './store/reducers';
import { GetFeedEffect } from './store/effects/getFeed.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([GetFeedEffect]),
  ],
  exports: [FeedComponent],
  declarations: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
