// Packages
import { createAction, props } from '@ngrx/store';

// Store
import { ActionTypes } from '../actionTypes';
// Types
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { AuthActionRequestInterface } from '../../types/authActionRequest.interface';
import { AuthActionSuccessInterface } from '../../types/authActionSuccess.interface';
import { AuthActionFailureInterface } from '../../types/authActionFailure.interface';

export const registerAction = createAction<
  ActionTypes.REGISTER,
  AuthActionRequestInterface<RegisterRequestInterface>
>(
  ActionTypes.REGISTER,
  props<AuthActionRequestInterface<RegisterRequestInterface>>(),
);

export const registerSuccessAction = createAction<
  ActionTypes.REGISTER_SUCCESS,
  AuthActionSuccessInterface
>(ActionTypes.REGISTER_SUCCESS, props<AuthActionSuccessInterface>());

export const registerFailureAction = createAction<
  ActionTypes.REGISTER_FAILURE,
  AuthActionFailureInterface
>(ActionTypes.REGISTER_FAILURE, props<AuthActionFailureInterface>());
