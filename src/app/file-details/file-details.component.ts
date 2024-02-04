import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload/file-upload.service';
<<<<<<< Updated upstream
import { map } from 'rxjs';
import { compileNgModule } from '@angular/compiler';
=======
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

<<<<<<< Updated upstream
  fileUploads?: any[];
  lessonKeys?: any[];
  contentKeys: string[] = [];
  content?: any[] | undefined;
  finalContents: { [key: string]: any } = {};
  dataName = [] as any;
  dataExtension = [] as any;
  data = [] as any;

  basePath = '/Lessons';
  emptyArray = [] as any;
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.fileDetails();
  }

  fileDetails(): void {
    this.fileUploadService.getFiles().snapshotChanges().pipe(
        map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) // store the key
        )
    ).subscribe(lessonKey => {
      this.lessonKeys = lessonKey;
      this.createContentPath();
    });
  }

  directToLessonContentPage(): void {
    console.log(this.fileUploads);
  }

  createContentPath(): void {
    this.contentKeys = [];
    if (this.lessonKeys) {
      for (const lesson of this.lessonKeys) {
        for (const key in lesson) {
          if (typeof lesson[key] === 'object') {
            this.contentKeys.push(`${this.basePath}/${lesson.key}/${key}`);
          }
        }
      }
      this.contentKeys.forEach(item => {
        this.fileUploadService.getContentDetails(item).snapshotChanges().pipe(
          map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        ).subscribe(details => {
          this.fileUploads = details;
          for (const items of this.fileUploads) {
            let combinedString: String[] = [];
            for (const key in items) {
              if (key !== 'key') {
                combinedString += items[key];
              }
            }
            this.finalContents[items.key] = combinedString;
          }
          this.creatingFinalData(this.finalContents);
        })
      })
    }
  }
  creatingFinalData(val1: any) {
    console.log(val1['name']);
    this.data.push({ key: val1['name'], value: val1['extension'] });
=======
  fileInfos?: Observable<any>;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.fileInfos = this.fileUploadService.getFiles()
>>>>>>> Stashed changes
  }
}
