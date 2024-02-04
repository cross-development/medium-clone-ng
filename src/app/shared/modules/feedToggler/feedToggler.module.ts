// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { FeedTogglerComponent } from './components/feedToggler/feedToggler.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [FeedTogglerComponent],
  declarations: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
