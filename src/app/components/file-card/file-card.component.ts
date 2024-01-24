import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LessonContentComponent } from '../../lesson-content/lesson-content.component';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html'
})
export class FileCardComponent {
  constructor(private router: Router, private lessonContentComponent: LessonContentComponent) { }
  
  @Input() lessonKey: string = '';
  @Input() fileKey: string = '';
  @Input() fileName: string = '';
  @Input() fileType: string = '';
  @Input() fileImageUrl: string = '';

  directToContentView(): void {
    this.router.navigate(['/contentView', this.lessonKey, this.fileKey])
  }

  setActiveFalse(): void {
    this.lessonContentComponent.updateActive(this.lessonKey, this.fileKey);
  }
}
