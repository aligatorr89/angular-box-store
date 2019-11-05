import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxItemDetailViewComponent } from '../box-item-detail-view/box-item-detail-view.component';
import { BoxItemsView, BoxItemDetailView } from '../../../shared-lib/boxes/view';

@Component({
  selector: 'app-box-items-view',
  templateUrl: './box-items-view.component.html',
  styleUrls: ['./box-items-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxItemsViewComponent implements OnInit {
  @Input() boxItems: BoxItemsView;
  showItemDetail = false;
  selectedBoxItem: BoxItemDetailView;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(itemDetail: BoxItemDetailView): void {
    const dialogRef = this.dialog.open(BoxItemDetailViewComponent, {
      width: '384px',
      data: itemDetail
    });
  }

}
