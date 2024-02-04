// Packages
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit, OnDestroy {
  public resourceUrl: string;
  public tagName: string;

  private queryParamsSubscription: Subscription;

  constructor(private readonly route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.initializeListeners();
  }

  public ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.resourceUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
