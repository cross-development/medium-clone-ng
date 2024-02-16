// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// Components
import { SettingsComponent } from './components/settings/settings.component';
// Store
import { settingsReducer } from './store/reducers';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('settings', settingsReducer)],
  exports: [SettingsComponent],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
