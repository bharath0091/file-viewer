import { Pipe, PipeTransform } from '@angular/core';
import {SearchModel} from './search.model';

@Pipe({
  name: 'resultsFilter',
  pure: true
})
export class ResultsFilterPipe implements PipeTransform {
  transform(rows: any[], filter: SearchModel): any {
    if (!rows || !filter) {
      return rows;
    }
    const returnRows: any[] = rows.filter(row => {
      return row[filter.columnNumber - 1] === filter.searchValue;
    });
    console.log(`returnRows : ${returnRows}`)
    return returnRows;
  }
}
