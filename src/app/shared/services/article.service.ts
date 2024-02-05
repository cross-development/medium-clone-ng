// Packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// Types
import { ArticleInterface } from '../types/article.interface';
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface';

@Injectable()
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  public getArticle(slug: string): Observable<ArticleInterface> {
    return this.http
      .get<GetArticleResponseInterface>(`/articles/${slug}`)
      .pipe(map((response: GetArticleResponseInterface) => response.article));
  }
}
