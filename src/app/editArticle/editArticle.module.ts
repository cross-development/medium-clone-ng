// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// Components
import { EditArticleComponent } from './components/editArticle/editArticle.component';
// Modules
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
// Services
import { EditArticleService } from './services/editArticle.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
// Store
import { updateArticleReducer } from './store/reducers';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';

@NgModule({
  imports: [
    CommonModule,
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('updateArticle', updateArticleReducer),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
