// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TagListComponent } from './components/tagList/tagList.component';

@NgModule({
  imports: [CommonModule],
  exports: [TagListComponent],
  declarations: [TagListComponent],
})
export class TagListModule {}
