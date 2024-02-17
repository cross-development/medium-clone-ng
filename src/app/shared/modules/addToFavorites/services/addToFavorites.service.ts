// Packages
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// Types
import { ArticleInterface } from '../../../types/article.interface';
import { GetArticleResponseInterface } from '../../../types/getArticleResponse.interface';

@Injectable({ providedIn: 'root' })
export class AddToFavoritesService {
  constructor(private readonly http: HttpClient) {}

  private getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }

  public addToFavorites(slug: string): Observable<ArticleInterface> {
    return this.http.post(`/articles/${slug}/favorite`, {}).pipe(map(this.getArticle));
  }

  public removeFromFavorites(slug: string): Observable<ArticleInterface> {
    return this.http.delete(`/articles/${slug}/favorite`).pipe(map(this.getArticle));
  }
}
