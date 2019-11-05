import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BoxesListView, BoxesListElementView } from '../../../shared-lib/boxes/view';
import { INode } from '../../../shared-lib/boxes/boxes';

@Component({
  selector: 'app-boxes-list-view',
  templateUrl: './boxes-list-view.component.html',
  styleUrls: ['./boxes-list-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxesListViewComponent implements OnInit {
  @Input() boxes: BoxesListView;
  @Output() clickEmmiter: EventEmitter<BoxesListElementView> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hasNewTag(node: INode): boolean {
    if (Array.isArray(node.tags)) {
      for (let i = 0; i < node.tags.length; i++) {
        if ( node.tags[i].name === 'new') {
          return true;
        }
      }
    }
    return false;
  }

  trackById(index: number, row: BoxesListElementView) {
    return row.node.id;
  }

  onClick(row: BoxesListElementView) {
    this.clickEmmiter.emit(row);
  }
}
