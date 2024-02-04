import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload';
=======
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
<<<<<<< Updated upstream

// Reference: https://www.bezkoder.com/angular-16-firebase-storage/

export class FileUploadService {
  private basePath = '/Lessons'; // TODO: eventually, it should be 'user_id/lessons' once we get auth to work
  basePathUpdate?: any;
  fdUpdatePath?: any;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  updatePath(newPath: string): void {
    this.basePathUpdate = `${this.basePath}/${newPath}`;
  }

  fileDetailUpdatePath(path: string): void {
    this.fdUpdatePath = `${this.basePath}/${path}`;
  }

    // Uploading single file to firebase
  uploadFile(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePathUpdate}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    const fileType = fileUpload.file.type;
    const pointCloud = 1000;
    const currentDateTime = Date();
    const isActive = true;

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          fileUpload.extension = fileType;
          fileUpload.pointCloud = pointCloud;
          fileUpload.createdDate = currentDateTime;
          fileUpload.modifiedDate = currentDateTime;
          fileUpload.isActive = isActive;
          this.db.list(this.basePathUpdate).push(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  // Retrieve all or a specified number of files from firebase
  getFiles(numberItems?: number): AngularFireList<FileUpload> {
    if (numberItems) {
      console.log(`${numberItems} and path is ${this.basePath}`)
      return this.db.list(this.basePath, ref =>
        ref.limitToLast(numberItems));
    } else {
      console.log(`${numberItems} and path is ${this.db.list(this.basePath)}`)

      return this.db.list(this.basePath);
    }
  }

  getContentDetails(contentPath: string): AngularFireList<FileUpload> {
    const contentPath1 = contentPath;
    if (contentPath1) {
      return this.db.list(contentPath1);
    }
    else {
      return this.db.list(this.basePath);
    }
    return this.db.list(this.basePath);
  }

  // TODO: uncomment when doing the delete file function
  // deleteFile(fileUpload: FileUpload): void {
  //   this.deleteFileDatabase(fileUpload.key)
  //     .then(() => {
  //       this.deleteFileStorage(fileUpload.name);
  //     })
  //     .catch(error => console.log(error));
  // }

  // private deleteFileDatabase(key: string): Promise<void> {
  //   return this.db.list(this.basePath).remove(key);
  // }

  // private deleteFileStorage(name: string): void {
  //   const storageRef = this.storage.ref(this.basePath);
  //   storageRef.child(name).delete();
  // }
=======
export class FileUploadService {

  // Calling a local server for uploading the file
  // Need to change the URL with firebase url
  private baseApiUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData = new FormData();

    formData.append("file", file);

    // Request for uploading the file
    const req = new HttpRequest('POST', `${this.baseApiUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  // Getting back the information of the uploaded files
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/files`);
  }
>>>>>>> Stashed changes
}
