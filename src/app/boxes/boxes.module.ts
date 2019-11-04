import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';
import { BoxesListViewComponent } from './components/boxes-list-view/boxes-list-view.component';

@NgModule({
  declarations: [BoxesListComponent, BoxesListViewComponent],
  imports: [
    CommonModule
  ]
})
export class BoxesModule { }
