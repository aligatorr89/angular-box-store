import { Component, OnInit, Input } from '@angular/core';
import { BoxesListView } from '../../../shared-lib/boxes/view';

@Component({
  selector: 'app-boxes-list-view',
  templateUrl: './boxes-list-view.component.html',
  styleUrls: ['./boxes-list-view.component.sass']
})
export class BoxesListViewComponent implements OnInit {
  @Input('boxes') boxes: BoxesListView;

  constructor() { }

  ngOnInit() {
  }

}
