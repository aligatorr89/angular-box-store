import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';

const routes: Route[] = [
  {path: 'boxes', component: BoxesListComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BoxesRoutingModule { }
