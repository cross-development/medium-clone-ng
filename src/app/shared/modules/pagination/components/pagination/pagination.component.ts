// Packages
import { Component, Input, OnInit } from '@angular/core';
// Services
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total')
  public totalProps: number;

  @Input('limit')
  public limitProps: number;

  @Input('currentPage')
  public currentPageProps: number;

  @Input('url')
  public urlProps: string;

  public pages: number[];
  public pagesCount: number;

  constructor(private readonly utilsService: UtilsService) {}

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);

    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
