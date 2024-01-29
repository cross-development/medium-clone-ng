// Types
import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
  author: ProfileInterface;
  title: string;
  description: string;
  body: string;
  slug: string;
  tagList: string[];
  favorite: boolean;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}
