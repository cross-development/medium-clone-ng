// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { PopularTagsSuccessActionInterface } from '../../types/popularTagsSuccessAction.interface';
import { PopularTagsFailureActionInterface } from '../../types/popularTagsFailureAction.interface';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction<
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  PopularTagsSuccessActionInterface
>(ActionTypes.GET_POPULAR_TAGS_SUCCESS, props<PopularTagsSuccessActionInterface>());

export const getPopularTagsFailuresAction = createAction<
  ActionTypes.GET_POPULAR_TAGS_FAILURE,
  PopularTagsFailureActionInterface
>(ActionTypes.GET_POPULAR_TAGS_FAILURE, props<PopularTagsFailureActionInterface>());
