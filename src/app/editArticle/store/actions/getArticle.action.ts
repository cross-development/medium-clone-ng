// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { GetArticleRequestActionInterface } from '../../types/getArticleRequestAction.interface';
import { GetArticleSuccessActionInterface } from '../../types/getArticleSuccessAction.interface';
import { GetArticleFailureActionInterface } from '../../types/getArticleFailureAction.interface';

export const getArticleAction = createAction<
  ActionTypes.GET_ARTICLE,
  GetArticleRequestActionInterface
>(ActionTypes.GET_ARTICLE, props<GetArticleRequestActionInterface>());

export const getArticleSuccessAction = createAction<
  ActionTypes.GET_ARTICLE_SUCCESS,
  GetArticleSuccessActionInterface
>(ActionTypes.GET_ARTICLE_SUCCESS, props<GetArticleSuccessActionInterface>());

export const getArticleFailureAction = createAction<
  ActionTypes.GET_ARTICLE_FAILURE,
  GetArticleFailureActionInterface
>(ActionTypes.GET_ARTICLE_FAILURE, props<GetArticleFailureActionInterface>());
