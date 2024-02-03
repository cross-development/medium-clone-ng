// Packages
import { createReducer, on } from '@ngrx/store';
// Store
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailuresAction,
} from './actions/getPopularTags.action';
// Types
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

export const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    }),
  ),
  on(
    getPopularTagsFailuresAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);
