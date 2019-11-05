import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetUrl } from '../../shared-lib/boxes/api';
import * as BoxesList from '../../shared-lib/boxes/boxes';
import { BoxesListView, BoxItemsView, BoxMetaView } from '../../shared-lib/boxes/view';
import * as BoxItems from '../../shared-lib/boxes/box-items';
import * as BoxMeta from '../../shared-lib/boxes/box-meta';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(protected http: HttpClient) {}

  getList(): Observable<BoxesListView> {
    return this.http.get<BoxesList.IData>(GetUrl.boxesList, {
      responseType: 'json'
    }).pipe(
      map((res) => res.data.boxes.edges)
    );
  }

  getBoxMeta(id: string): Observable<BoxMetaView> {
    // to use id we need a real api
    return this.http.get<BoxMeta.IData>(GetUrl.boxMeta, {
      responseType: 'json'
    }).pipe(
      map((res) => res.data.box)
    );
  }

  getBoxViewItems(id: string): Observable<BoxItemsView> {
    // to use id we need a real api
    return this.http.get<BoxItems.IData>(GetUrl.boxViewItems, {
      responseType: 'json'
    }).pipe(
      map((res) => res.data.boxItems.edges)
    );
  }
}
