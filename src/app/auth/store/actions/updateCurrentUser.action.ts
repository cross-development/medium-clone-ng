// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { AuthActionSuccessInterface } from '../../types/authActionSuccess.interface';
import { AuthActionFailureInterface } from '../../types/authActionFailure.interface';
import { UpdateCurrentUserRequestActionInterface } from '../../types/updateCurrentUserRequestAction.interface';

export const updateCurrentUserAction = createAction<
  ActionTypes.UPDATE_CURRENT_USER,
  UpdateCurrentUserRequestActionInterface
>(ActionTypes.UPDATE_CURRENT_USER, props<UpdateCurrentUserRequestActionInterface>());

export const updateCurrentUserSuccessAction = createAction<
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  AuthActionSuccessInterface
>(ActionTypes.UPDATE_CURRENT_USER_SUCCESS, props<AuthActionSuccessInterface>());

export const updateCurrentUserFailureAction = createAction<
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  AuthActionFailureInterface
>(ActionTypes.UPDATE_CURRENT_USER_FAILURE, props<AuthActionFailureInterface>());
