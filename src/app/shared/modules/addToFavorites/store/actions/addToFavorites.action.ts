// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { AddToFavoriteRequestActionInterface } from '../../types/addToFavoriteRequestAction.interface';
import { AddToFavoriteSuccessActionInterface } from '../../types/addToFavoriteSuccessAction.interface';
import { AddToFavoriteFailureActionInterface } from '../../types/addToFavoriteFailureAction.interface';

export const addToFavoritesAction = createAction<
  ActionTypes.ADD_TO_FAVORITES,
  AddToFavoriteRequestActionInterface
>(ActionTypes.ADD_TO_FAVORITES, props<AddToFavoriteRequestActionInterface>());

export const addToFavoritesSuccessAction = createAction<
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  AddToFavoriteSuccessActionInterface
>(ActionTypes.ADD_TO_FAVORITES_SUCCESS, props<AddToFavoriteSuccessActionInterface>());

export const addToFavoritesFailureAction = createAction<
  ActionTypes.ADD_TO_FAVORITES_FAILURE,
  AddToFavoriteFailureActionInterface
>(ActionTypes.ADD_TO_FAVORITES_FAILURE, props<AddToFavoriteFailureActionInterface>());
