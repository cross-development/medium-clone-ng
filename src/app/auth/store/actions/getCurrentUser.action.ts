// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { AuthActionSuccessInterface } from '../../types/authActionSuccess.interface';

export const getCurrentUserAction = createAction<ActionTypes.GET_CURRENT_USER>(
  ActionTypes.GET_CURRENT_USER,
);

export const getCurrentUserSuccessAction = createAction<
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  AuthActionSuccessInterface
>(ActionTypes.GET_CURRENT_USER_SUCCESS, props<AuthActionSuccessInterface>());

export const getCurrentUserFailureAction = createAction<ActionTypes.GET_CURRENT_USER_FAILURE>(
  ActionTypes.GET_CURRENT_USER_FAILURE,
);
