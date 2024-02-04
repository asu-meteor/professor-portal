import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';
import { SnackbarService } from '../snackbar/snackbar.service';
<<<<<<< Updated upstream
import { FileUpload } from '../models/file-upload';
import { AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {

  // Declaring variables
<<<<<<< Updated upstream
  lessonKey?: any;
  currentFile?: File;
  progress = 0;
  fileName = '';

  constructor(private fileUploadService: FileUploadService, private snackBarService: SnackbarService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getLessonKey();
    this.updatedbPath();
  }

  getLessonKey(): void {
    this._route.params.subscribe(params => {
      this.lessonKey = params['lessonId'];
      console.log(params);
    })
  }

  updatedbPath(): void {
    const path = `${this.lessonKey}`;
    this.fileUploadService.updatePath(path);
  }
=======
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(private fileUploadService: FileUploadService, private snackBarService: SnackbarService) { }
>>>>>>> Stashed changes

  // Getting file details and dividing into variables
  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    }
    else {
      this.fileName = 'Select File';
    }
  }

<<<<<<< Updated upstream
  // Uploading file to firebase
  upload(): void {
    if (this.currentFile) {
        const currentFileUpload = new FileUpload(this.currentFile);
        this.fileUploadService.uploadFile(currentFileUpload).subscribe(
          percentage => {
            this.progress = Math.round(percentage ? percentage : 0);
            if(percentage == 100){
              this.snackBarService.showSnackbar("Successfully uploaded: " + this.currentFile?.name);
            }
          },
          error => {
            this.snackBarService.showSnackbar(error);
          },
        );
      }
=======
  // Uploading the file and calculating the progress
  upload(): void {
    this.progress = 0;
    this.message = "";

    if (this.currentFile) {
      this.fileUploadService.upload(this.currentFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          }
          else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.snackBarService.showSnackbar(this.message)
            this.fileInfos = this.fileUploadService.getFiles();
          }
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          }
          else {
            this.message = 'Could not upload the file!';
          }

          this.snackBarService.showSnackbar(this.message)
          this.currentFile = undefined;
        }
      );
    }
  }

  // Calling fileUploadService
  ngOnInit(): void {
    //this.fileInfos = this.fileUploadService.getFiles();
>>>>>>> Stashed changes
  }
}
