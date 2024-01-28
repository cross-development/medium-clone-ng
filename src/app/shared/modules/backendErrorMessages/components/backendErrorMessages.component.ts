// Packages
import { Component, Input, OnInit } from '@angular/core';
// Types
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors')
  public backendErrorsProps: BackendErrorsInterface;

  public errorMessages: string[];

  public ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name) => `${name} ${this.backendErrorsProps[name].join(', ')}`,
    );
  }
}
