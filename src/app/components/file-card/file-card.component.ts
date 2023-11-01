import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html'
})
export class FileCardComponent {
  constructor(private router: Router) { }
  
  @Input() lessonKey: string = '';
  @Input() fileKey: string = '';
  @Input() fileName: string = '';
  @Input() fileType: string = '';
  @Input() fileImageUrl: string = '';

  directToContentView(): void {
    this.router.navigate(['/contentView', this.lessonKey, this.fileKey])
  }
}
