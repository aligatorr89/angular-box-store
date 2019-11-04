import { Component, OnInit } from '@angular/core';

import { BoxesListView } from '../../../shared-lib/boxes/view';
import { BoxesService } from '../../services/boxes.service';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.sass']
})
export class BoxesListComponent implements OnInit {
  boxes: BoxesListView = [];

  constructor(private boxesService: BoxesService) { }

  ngOnInit() {
    this.boxesService.getList().subscribe((next) => this.boxes = next);
  }

}
