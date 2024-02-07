// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { ArticleRequestActionInterface } from '../../types/articleRequestAction.interface';
import { ArticleFailureActionInterface } from '../../types/articleFailureAction.interface';

export const deleteArticleAction = createAction<
  ActionTypes.DELETE_ARTICLE,
  ArticleRequestActionInterface
>(ActionTypes.DELETE_ARTICLE, props<ArticleRequestActionInterface>());

export const deleteArticleSuccessAction = createAction<ActionTypes.DELETE_ARTICLE_SUCCESS>(
  ActionTypes.DELETE_ARTICLE_SUCCESS,
);

export const deleteArticleFailureAction = createAction<
  ActionTypes.DELETE_ARTICLE_FAILURE,
  ArticleFailureActionInterface
>(ActionTypes.DELETE_ARTICLE_FAILURE, props<ArticleFailureActionInterface>());
