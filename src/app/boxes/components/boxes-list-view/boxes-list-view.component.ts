import { Component, OnInit, Input } from '@angular/core';
import { IBox } from '../../../shared-lib/boxes/box';

@Component({
  selector: 'app-boxes-list-view',
  templateUrl: './boxes-list-view.component.html',
  styleUrls: ['./boxes-list-view.component.sass']
})
export class BoxesListViewComponent implements OnInit {
  @Input('boxes') boxes: IBox;

  constructor() { }

  ngOnInit() {
  }

}
