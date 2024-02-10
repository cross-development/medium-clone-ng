// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { UpdateArticleRequestActionInterface } from '../../types/updateArticleRequestAction.interface';
import { UpdateArticleSuccessActionInterface } from '../../types/updateArticleSuccessAction.interface';
import { UpdateArticleFailureActionInterface } from '../../types/updateArticleFailureAction.interface';

export const updateArticleAction = createAction<
  ActionTypes.UPDATE_ARTICLE,
  UpdateArticleRequestActionInterface
>(ActionTypes.UPDATE_ARTICLE, props<UpdateArticleRequestActionInterface>());

export const updateArticleSuccessAction = createAction<
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  UpdateArticleSuccessActionInterface
>(ActionTypes.UPDATE_ARTICLE_SUCCESS, props<UpdateArticleSuccessActionInterface>());

export const updateArticleFailureAction = createAction<
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  UpdateArticleFailureActionInterface
>(ActionTypes.UPDATE_ARTICLE_FAILURE, props<UpdateArticleFailureActionInterface>());
