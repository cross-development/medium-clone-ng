// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// Components
import { ArticleComponent } from './components/article/article.component';
// Services
import { ArticleService } from './services/article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
// Modules
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
// Store
import { articleReducer } from './store/reducers';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  exports: [ArticleComponent],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
