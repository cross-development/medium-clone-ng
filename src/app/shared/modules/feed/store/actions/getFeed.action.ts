// Packages
import { createAction, props } from '@ngrx/store';
// Store
import { ActionTypes } from '../actionTypes';
// Types
import { FeedActionRequestInterface } from '../../types/feedActionRequest.interface';
import { FeedActionSuccessInterface } from '../../types/feedActionSuccess.interface';
import { FeedActionFailureInterface } from '../../types/feedActionFailure.interface';

export const getFeedAction = createAction<ActionTypes.GET_FEED, FeedActionRequestInterface>(
  ActionTypes.GET_FEED,
  props<FeedActionRequestInterface>(),
);

export const getFeedSuccessAction = createAction<
  ActionTypes.GET_FEED_SUCCESS,
  FeedActionSuccessInterface
>(ActionTypes.GET_FEED_SUCCESS, props<FeedActionSuccessInterface>());

export const getFeedFailureAction = createAction<
  ActionTypes.GET_FEED_FAILURE,
  FeedActionFailureInterface
>(ActionTypes.GET_FEED_FAILURE, props<FeedActionFailureInterface>());
