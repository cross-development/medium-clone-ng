// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
// Modules
import { FeedModule } from '../shared/modules/feed/feed.module';

@NgModule({
  imports: [CommonModule, FeedModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
