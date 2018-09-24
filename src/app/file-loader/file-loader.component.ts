import {Component} from '@angular/core';
import {DataShareService} from './data-share.service';
import {FileModel} from './file.model';

@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.css']
})
export class FileLoaderComponent {

  constructor(private dataShareService: DataShareService) { }

  uploadFile($event) {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsText($event.target.files[0]);
    fileReader.onloadend = this.loadData(fileReader);
  }

  private loadData(fileReader: FileReader) {
    return (event) => {
      const result: string = fileReader.result;
      const resultLines: string[] = result.split(/\r\n|\n/);
      // const data: FileModel = new FileModel();
      const headers = this.parseLine(resultLines[0]);
      const rows = [];
      resultLines.slice(1)
        .forEach(line => {
          rows.push(this.parseLine(line));
        });
      this.dataShareService.publishData(new FileModel(headers, rows));
    };
  }

  private parseLine(line: string): string[] {
    const row: any[] = [];
    line.split(',')
      .forEach(value => {
        row.push(value.substring(1, value.length - 1)); // remove beginning and ending double quote
      });
    return row;
  }
}
