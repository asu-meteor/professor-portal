import { Component, OnInit } from '@angular/core';
import { LessonContentService } from '../lesson-content/lesson-content.service';
import { FileUpload } from '../models/file-upload';
import { map } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.css']
})
export class LessonContentComponent implements OnInit {
  // Defining variables
  contents?: any[];
  key?: any;
  updateKey?: any;
  active: boolean = false;

  constructor(private lessonContentService: LessonContentService, private router: Router, private _router: ActivatedRoute, private snackBarService: SnackbarService) { }

  ngOnInit(): void {
    this.getLessonKey();
    this.updatedbPath();
    this.getAllContents();
  }

  updatedbPath(): void {
    this.lessonContentService.updatePath(this.key);
  }

  getAllContents(): void {
    this.lessonContentService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) // store the key
      )
    ).subscribe(fileUploads => {
      this.contents = fileUploads;
    });
  }

  getLessonKey(): void {
    this._router.params.subscribe(params => {
      this.key = params['id'];
    })
  }

  fileUpload(): void {
    this.router.navigate(['/fileupload', this.key]);
  }

  updateActive(lessonKey: string, fileKey: string): void {
    this.updateKey = lessonKey + '/' + fileKey;
    this.lessonContentService.update(fileKey, { isActive: this.active })
      .then(() => {
        this.snackBarService.showSnackbar("Content deleted Successfully");
      });
  }
}
