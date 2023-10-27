import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html'
})
export class LessonCardComponent {
  @Input() lessonName: string = '';
  @Input() lessonDescription: string = '';
  @Input() lessonImageUrl: string = '';
}
