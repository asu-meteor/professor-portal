import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentPreviewService } from '../content-preview/content-preview.service'
import { map } from 'rxjs';
@Component({
  selector: 'app-content-preview',
  templateUrl: './content-preview.component.html',
  styleUrls: ['./content-preview.component.css']
})
export class ContentPreviewComponent implements OnInit {
  lessonKey?: string;
  contentKey?: string;
  contents?: any[];
  finalContents: { [key: string]: any } = [];

  constructor(private router: Router, private _route: ActivatedRoute, private contentpreviewService: ContentPreviewService) { }

  ngOnInit() {
    this.getContentKey();
    this.updatedbPath();
    this.getContentDetails();
  }

  updatedbPath(): void {
    const path = `${this.lessonKey}/${this.contentKey}`;
    this.contentpreviewService.updatePath(path);
  }

  getContentKey(): void {
    this._route.params.subscribe(params => {
      this.lessonKey = params['lessonId'];
      this.contentKey = params['contentId'];
      console.log(params);
    })
  }

  getContentDetails(): void {
    this.contentpreviewService.getDetails().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, value: c.payload.val() })) // store the key
      )
    ).subscribe(fileUploads => {
      this.contents = fileUploads;
      this.contents.forEach(item => {
        this.finalContents[item.key] = item.value;
      });
    });
  }

}
