// Types
import { PopularTagType } from '../../../types/popularTag.type';

export interface PopularTagsStateInterface {
  data: PopularTagType[];
  error: string | null;
  isLoading: boolean;
}
