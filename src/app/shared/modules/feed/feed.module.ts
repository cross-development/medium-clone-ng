// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  imports: [CommonModule],
  exports: [FeedComponent],
  declarations: [FeedComponent],
})
export class FeedModule {}
