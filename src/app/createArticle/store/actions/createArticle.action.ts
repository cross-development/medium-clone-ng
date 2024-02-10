// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { CreateArticleRequestActionInterface } from '../../types/createArticleRequestAction.interface';
import { CreateArticleSuccessActionInterface } from '../../types/createArticleSuccessAction.interface';
import { CreateArticleFailureActionInterface } from '../../types/createArticleFailureAction.interface';

export const createArticleAction = createAction<
  ActionTypes.CREATE_ARTICLE,
  CreateArticleRequestActionInterface
>(ActionTypes.CREATE_ARTICLE, props<CreateArticleRequestActionInterface>());

export const createArticleSuccessAction = createAction<
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  CreateArticleSuccessActionInterface
>(ActionTypes.CREATE_ARTICLE_SUCCESS, props<CreateArticleSuccessActionInterface>());

export const createArticleFailureAction = createAction<
  ActionTypes.CREATE_ARTICLE_FAILURE,
  CreateArticleFailureActionInterface
>(ActionTypes.CREATE_ARTICLE_FAILURE, props<CreateArticleFailureActionInterface>());
