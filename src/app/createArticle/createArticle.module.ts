// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// Components
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
// Modules
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
// Services
import { CreateArticleService } from './services/createArticle.service';
// Store
import { createArticleReducer } from './store/reducers';
import { CreateArticleEffect } from './store/effects/createArticle.effect';

@NgModule({
  imports: [
    CommonModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', createArticleReducer),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
