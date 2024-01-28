// Packages
import { createAction, props } from '@ngrx/store';

// Store
import { ActionTypes } from '../actionTypes';
// Types
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { AuthActionRequestInterface } from '../../types/authActionRequest.interface';
import { AuthActionSuccessInterface } from '../../types/authActionSuccess.interface';
import { AuthActionFailureInterface } from '../../types/authActionFailure.interface';

export const loginAction = createAction<
  ActionTypes.LOGIN,
  AuthActionRequestInterface<LoginRequestInterface>
>(
  ActionTypes.LOGIN,
  props<AuthActionRequestInterface<LoginRequestInterface>>(),
);

export const loginSuccessAction = createAction<
  ActionTypes.LOGIN_SUCCESS,
  AuthActionSuccessInterface
>(ActionTypes.LOGIN_SUCCESS, props<AuthActionSuccessInterface>());

export const loginFailureAction = createAction<
  ActionTypes.LOGIN_FAILURE,
  AuthActionFailureInterface
>(ActionTypes.LOGIN_FAILURE, props<AuthActionFailureInterface>());
