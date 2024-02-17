// Types
import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
  author: ProfileInterface;
  title: string;
  description: string;
  body: string;
  slug: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  createdAt: string;
  updatedAt: string;
}
