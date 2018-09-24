import {Component} from '@angular/core';
import {DataShareService} from '../file-loader/data-share.service';
import {FileModel} from '../file-loader/file.model';
import {SearchModel} from './search.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  headers: string[];
  rows: string[];
  filterObject: SearchModel;
  constructor(private dataShareService: DataShareService) {
      dataShareService.observableData.subscribe((data: FileModel) => {
        this.headers = data.headers;
        this.rows = data.rows;
      });
  }

  filterBy(columnNumber: number, searchValue: string) {
    this.filterObject = searchValue ? new SearchModel(columnNumber, searchValue) : null;
  }
}
