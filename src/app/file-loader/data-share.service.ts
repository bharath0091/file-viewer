import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {FileModel} from './file.model';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private messageSource = new BehaviorSubject(new FileModel(null, null));
  observableData = this.messageSource.asObservable();

  constructor() { }

  publishData(data: FileModel) {
    console.log(`data.rows: ${data.rows}`);
    this.messageSource.next(data);
  }
}
