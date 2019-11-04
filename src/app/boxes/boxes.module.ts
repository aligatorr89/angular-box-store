import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';
import { BoxesListViewComponent } from './components/boxes-list-view/boxes-list-view.component';
import { BoxesRoutingModule } from './boxes-routing.module';

@NgModule({
  declarations: [BoxesListComponent, BoxesListViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BoxesRoutingModule
  ]
})
export class BoxesModule { }