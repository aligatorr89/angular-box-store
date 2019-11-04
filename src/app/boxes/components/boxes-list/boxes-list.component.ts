import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { BoxesListView, BoxesListElementView } from '../../../shared-lib/boxes/view';
import { BoxesService } from '../../services/boxes.service';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.sass']
})
export class BoxesListComponent implements OnInit, OnDestroy {
  boxes: BoxesListView = [];
  boxesSubscription: Subscription;
  constructor(private boxesService: BoxesService, private router: Router) { }

  ngOnInit() {
    this.boxesSubscription = this.boxesService.getList().subscribe((next) => this.boxes = next);
  }
  ngOnDestroy() {
    this.boxesSubscription.unsubscribe();
  }

  openBox(box: BoxesListElementView) {
    this.router.navigate(['boxes', box.node.id]);
  }
}
