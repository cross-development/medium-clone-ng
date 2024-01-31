// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { PaginationComponent } from './components/pagination/pagination.component';
// Services
import { UtilsService } from '../../services/utils.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
