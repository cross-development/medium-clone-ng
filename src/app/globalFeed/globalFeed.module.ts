// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
// Modules
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';

@NgModule({
  imports: [CommonModule, FeedModule, BannerModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
