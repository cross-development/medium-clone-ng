// Packages
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './errorMessage.component.html',
  styleUrls: ['./errorMessage.component.scss'],
})
export class ErrorMessageComponent {
  @Input('message')
  public messageProps: string = 'Something went wrong';
}
