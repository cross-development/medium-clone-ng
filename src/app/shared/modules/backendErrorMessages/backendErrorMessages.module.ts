// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { BackendErrorMessagesComponent } from './components/backendErrorMessages.component';

@NgModule({
  imports: [CommonModule],
  exports: [BackendErrorMessagesComponent],
  declarations: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
