// Types
import { ArticleStateInterface } from '../../article/types/articleState.interface';
import { AuthStateInterface } from '../../auth/types/authState.interface';
import { CreateArticleStateInterface } from '../../createArticle/types/createArticleState.interface';
import { EditArticleStateInterface } from '../../editArticle/types/editArticleState.interface';
import { UserProfileStateInterface } from '../../userProfile/types/userProfileState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  userProfile: UserProfileStateInterface;
}
