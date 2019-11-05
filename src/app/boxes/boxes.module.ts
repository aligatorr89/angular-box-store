import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';
import { BoxesListViewComponent } from './components/boxes-list-view/boxes-list-view.component';
import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxesMaterialModule } from './boxes-material.module';
import { BoxComponent } from './components/box/box.component';
import { BoxMetaViewComponent } from './components/box-meta-view/box-meta-view.component';
import { BoxItemsViewComponent } from './components/box-items-view/box-items-view.component';

@NgModule({
  declarations: [BoxesListComponent, BoxesListViewComponent, BoxComponent, BoxMetaViewComponent, BoxItemsViewComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    BoxesRoutingModule,
    BoxesMaterialModule
  ]
})
export class BoxesModule { }
