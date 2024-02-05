// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { ArticleRequestActionInterface } from '../../types/articleRequestAction.interface';
import { ArticleSuccessActionInterface } from '../../types/articleSuccessAction.interface';
import { ArticleFailureActionInterface } from '../../types/articleFailureAction.interface';

export const getArticleAction = createAction<
  ActionTypes.GET_ARTICLE,
  ArticleRequestActionInterface
>(ActionTypes.GET_ARTICLE, props<ArticleRequestActionInterface>());

export const getArticleSuccessAction = createAction<
  ActionTypes.GET_ARTICLE_SUCCESS,
  ArticleSuccessActionInterface
>(ActionTypes.GET_ARTICLE_SUCCESS, props<ArticleSuccessActionInterface>());

export const getArticleFailureAction = createAction<
  ActionTypes.GET_ARTICLE_FAILURE,
  ArticleFailureActionInterface
>(ActionTypes.GET_ARTICLE_FAILURE, props<ArticleFailureActionInterface>());
