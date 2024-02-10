// Packages
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// Types
import { ArticleInterface } from '../../shared/types/article.interface';
import { ArticleInputInterface } from '../../shared/types/articleInput.interface';
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface';

@Injectable({ providedIn: 'root' })
export class CreateArticleService {
  constructor(private readonly http: HttpClient) {}

  public createArticleInput(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    return this.http
      .post<SaveArticleResponseInterface>('/articles', { article: articleInput })
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
