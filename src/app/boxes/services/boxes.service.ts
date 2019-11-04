import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetUrl } from '../../shared-lib/boxes/api';
import { IBox } from '../../shared-lib/boxes/box';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(protected http: HttpClient) {}

  getList() {
    return this.http.get<IBox[]>(GetUrl.boxesList, {
      responseType: 'json'
    });
  }
}
