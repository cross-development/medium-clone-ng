// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
// Modules
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';

@NgModule({
  imports: [CommonModule, ArticleFormModule],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}
