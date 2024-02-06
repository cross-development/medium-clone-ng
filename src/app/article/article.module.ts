// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// Components
import { ArticleComponent } from './components/article/article.component';
// Services
import { ArticleService } from '../shared/services/article.service';
// Modules
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
// Store
import { articleReducer } from './store/reducers';
import { GetArticleEffect } from './store/effects/getArticle.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect]),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  exports: [ArticleComponent],
  declarations: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
