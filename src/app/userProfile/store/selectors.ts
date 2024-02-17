// Packages
import { createSelector } from '@ngrx/store';
// Types
import { AppStateInterface } from '../../shared/types/appState.interface';
import { UserProfileStateInterface } from '../types/userProfileState.interface';

export const userProfileFeatureSelector = (state: AppStateInterface): UserProfileStateInterface =>
  state.userProfile;

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.isLoading,
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.error,
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.data,
);
