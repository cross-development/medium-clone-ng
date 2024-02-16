// Packages
import { createSelector } from '@ngrx/store';
// Types
import { SettingsStateInterface } from '../types/settingsState.interface';
import { AppStateInterface } from '../../shared/types/appState.interface';

export const settingsFeatureSelector = (state: AppStateInterface): SettingsStateInterface =>
  state.auth;

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors,
);
