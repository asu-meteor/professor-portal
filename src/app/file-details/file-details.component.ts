import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload/file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  fileInfos?: Observable<any>;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.fileInfos = this.fileUploadService.getFiles()
  }
}
