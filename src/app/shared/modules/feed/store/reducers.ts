// Packages
import { createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
// Store
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';
// Types
import { FeedStateInterface } from '../types/feedState.interface';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    }),
  ),
  on(
    getFeedFailureAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),
  ),
  on(routerNavigatedAction, (): FeedStateInterface => initialState),
);
