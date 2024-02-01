// Packages
import { Component, Input } from '@angular/core';
// Types
import { PopularTagType } from '../../../../types/popularTag.type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss'],
})
export class TagListComponent {
  @Input('tags')
  public tagsProps: PopularTagType[];
}
