import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class BoxesMaterialModule { }
