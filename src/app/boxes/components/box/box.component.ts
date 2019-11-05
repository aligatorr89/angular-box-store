import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoxItemsView, BoxMetaView } from '../../../shared-lib/boxes/view';
import { BoxesService } from '../../services/boxes.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass']
})
export class BoxComponent implements OnInit {
  id: string;
  boxMeta: BoxMetaView;
  boxItems: BoxItemsView;
  constructor(private route: ActivatedRoute, private boxesService: BoxesService) {
    this.route.params.subscribe((next) => this.id = next.id).unsubscribe();
  }

  ngOnInit() {
    this.boxesService.getBoxViewItems(this.id).subscribe((boxItems) => this.boxItems = boxItems);
    this.boxesService.getBoxMeta(this.id).subscribe((meta) => this.boxMeta = meta);
  }

}
