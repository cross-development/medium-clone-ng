// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// Components
import { SettingsComponent } from './components/settings/settings.component';
// Store
import { settingsReducer } from './store/reducers';
// Modules
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('settings', settingsReducer),
    BackendErrorMessagesModule,
  ],
  exports: [SettingsComponent],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
