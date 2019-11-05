import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';
import { BoxComponent } from './components/box/box.component';

const routes: Route[] = [
  {path: 'boxes', component: BoxesListComponent, pathMatch: 'full'},
  {path: 'boxes/:id', component: BoxComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BoxesRoutingModule { }
