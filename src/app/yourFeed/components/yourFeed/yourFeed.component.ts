// Packages
import { Component } from '@angular/core';

@Component({
  selector: 'app-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.component.scss'],
})
export class YourFeedComponent {
  public resourceUrl: string = '/articles/feed';
}
