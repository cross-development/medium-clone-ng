// Packages
import { createReducer, on } from '@ngrx/store';
// Store
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/createArticle.action';
// Types
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

export const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
);
