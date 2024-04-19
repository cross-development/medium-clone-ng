// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Components
import { PopularTagsComponent } from './components/popularTags/popularTags.component';
// Services
import { PopularTagsService } from './services/popularTags.service';
// Modules
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
// Store
import { popularTagsReducer } from './store/reducers';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    ErrorMessageModule,
  ],
  exports: [PopularTagsComponent],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
