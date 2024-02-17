// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Components
import { UserProfileComponent } from './components/userProfile/userProfile.component';
// Services
import { UserProfileService } from './services/userProfile.service';
// Modules
import { FeedModule } from '../shared/modules/feed/feed.module';
// Store
import { userProfileReducer } from './store/reducers';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', userProfileReducer),
    FeedModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
