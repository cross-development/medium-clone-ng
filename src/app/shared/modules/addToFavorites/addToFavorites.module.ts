// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
// Components
import { AddToFavoritesComponent } from './components/add-to-favorites/addToFavorites.component';
// Services
import { AddToFavoritesService } from './services/addToFavorites.service';
// Store
import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  exports: [AddToFavoritesComponent],
  declarations: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
