// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { YourFeedComponent } from './components/yourFeed/yourFeed.component';
// Modules
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

@NgModule({
  imports: [CommonModule, FeedModule, BannerModule, PopularTagsModule, FeedTogglerModule],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
