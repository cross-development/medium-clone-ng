// Packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { TopBarComponent } from './components/topBar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [TopBarComponent],
  declarations: [TopBarComponent],
})
export class TopBarModule {}
