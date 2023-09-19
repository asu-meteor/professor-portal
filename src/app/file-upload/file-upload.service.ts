import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
}
