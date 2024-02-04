// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TagFeedComponent } from './components/tagFeed/tagFeed.component';
// Modules
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

@NgModule({
  imports: [CommonModule, FeedModule, BannerModule, PopularTagsModule, FeedTogglerModule],
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
