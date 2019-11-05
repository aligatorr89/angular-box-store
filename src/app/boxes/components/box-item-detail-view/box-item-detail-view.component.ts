import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoxItemDetailView } from '../../../shared-lib/boxes/view';

@Component({
  selector: 'app-box-item-detail-view',
  templateUrl: './box-item-detail-view.component.html',
  styleUrls: ['./box-item-detail-view.component.sass']
})
export class BoxItemDetailViewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BoxItemDetailViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BoxItemDetailView
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
