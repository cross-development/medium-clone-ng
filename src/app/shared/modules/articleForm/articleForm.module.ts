// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { ArticleFormComponent } from './components/articleForm/articleForm.component';
// Modules
import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
