import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { BoxItemsView } from '../../../shared-lib/boxes/view';

@Component({
  selector: 'app-box-items-view',
  templateUrl: './box-items-view.component.html',
  styleUrls: ['./box-items-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxItemsViewComponent implements OnInit {
  @Input() boxItems: BoxItemsView;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.boxItems)
    }, 2500)

  }

}
