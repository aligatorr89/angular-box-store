import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {path: '', redirectTo: 'boxes', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
