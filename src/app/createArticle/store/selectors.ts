// Packages
import { createSelector } from '@ngrx/store';
// Types
import { AppStateInterface } from '../../shared/types/appState.interface';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

export const createArticleFeatureSelector = (
  state: AppStateInterface,
): CreateArticleStateInterface => state.createArticle;

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors,
);
