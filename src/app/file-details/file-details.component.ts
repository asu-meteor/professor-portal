import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload/file-upload.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  fileUploads?: any[];


  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.fileUploadService.getFiles().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) // store the key
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      console.log(this.fileUploads)
    });
  }

  directToLessonContentPage(): void {
    console.log(this.fileUploads);
  }
}
