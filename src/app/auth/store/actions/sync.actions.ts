// Packages
import { createAction } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';

export const logoutAction = createAction(ActionTypes.LOGOUT);
