// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { GetUserProfileRequestActionInterface } from '../../types/getUserProfileRequestAction.interface';
import { GetUserProfileSuccessActionInterface } from '../../types/getUserProfileSuccessAction.interface';
import { GetUserProfileFailureActionInterface } from '../../types/getUserProfileFailureAction.interface';

export const getUserProfileAction = createAction<
  ActionTypes.GET_USER_PROFILE,
  GetUserProfileRequestActionInterface
>(ActionTypes.GET_USER_PROFILE, props<GetUserProfileRequestActionInterface>());

export const getUserProfileSuccessAction = createAction<
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  GetUserProfileSuccessActionInterface
>(ActionTypes.GET_USER_PROFILE_SUCCESS, props<GetUserProfileSuccessActionInterface>());

export const getUserProfileFailureAction = createAction<
  ActionTypes.GET_USER_PROFILE_FAILURE,
  GetUserProfileFailureActionInterface
>(ActionTypes.GET_USER_PROFILE_FAILURE, props<GetUserProfileFailureActionInterface>());
