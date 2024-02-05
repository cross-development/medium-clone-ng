// Packages
import { createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
// Store
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from './actions/getArticle.action';
// Types
import { ArticleStateInterface } from '../types/articleState.interface';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    }),
  ),
  on(
    getArticleFailureAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),
  ),
  on(routerNavigatedAction, (): ArticleStateInterface => initialState),
);
