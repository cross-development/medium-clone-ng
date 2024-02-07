// Packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  public deleteArticle(slug: string): Observable<{}> {
    return this.http.delete<{}>(`/articles/${slug}`);
  }
}
