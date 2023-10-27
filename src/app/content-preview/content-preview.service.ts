import { Injectable } from '@angular/core';
import { FileUpload } from '../models/file-upload';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ContentPreviewService {
  // Default dbPath
  private dbPath = '/Lessons';

  contentRef: AngularFireList<FileUpload>;

  constructor(private db: AngularFireDatabase) {
    this.contentRef = db.list(this.dbPath);
  }

  // Updating dbPath from lesson webpage
  updatePath(newPath: string): void {
    newPath = `${this.dbPath}/${newPath}`;
    this.contentRef = this.getContentRef(newPath); // Assign the updated reference.
  }

  // Returning reference for the new dbPath
  getContentRef(newPath?: string): AngularFireList<FileUpload> {
    if (newPath) {
      return this.db.list(newPath);
    }
    return this.db.list(this.dbPath); // Return the default reference.
  }

  getDetails(): AngularFireList<FileUpload> {
    return this.contentRef;
  }
}
