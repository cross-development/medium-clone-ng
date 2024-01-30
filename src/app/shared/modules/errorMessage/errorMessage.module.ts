// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ErrorMessageComponent } from './components/errorMessage/errorMessage.component';

@NgModule({
  imports: [CommonModule],
  exports: [ErrorMessageComponent],
  declarations: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
