import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BoxMetaView } from '../../../shared-lib/boxes/view';

@Component({
  selector: 'app-box-meta-view',
  templateUrl: './box-meta-view.component.html',
  styleUrls: ['./box-meta-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxMetaViewComponent implements OnInit {
  @Input() boxMeta: BoxMetaView;

  constructor() { }

  ngOnInit() {
  }

}
