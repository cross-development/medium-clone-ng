// Types
import { ArticleInputInterface } from '../../shared/types/articleInput.interface';

export interface UpdateArticleRequestActionInterface {
  slug: string;
  articleInput: ArticleInputInterface;
}
