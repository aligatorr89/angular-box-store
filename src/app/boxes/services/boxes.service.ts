import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetUrl } from '../../shared-lib/boxes/api';
import { IData } from '../../shared-lib/boxes/box';
import { BoxesListView } from '../../shared-lib/boxes/view';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(protected http: HttpClient) {}

  getList(): Observable<BoxesListView> {
    return this.http.get<IData>(GetUrl.boxesList, {
      responseType: 'json'
    }).pipe(
      map((res) => res.data.boxes.edges)
    );
  }
}
