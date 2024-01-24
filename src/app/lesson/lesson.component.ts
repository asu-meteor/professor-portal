import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { LessonService } from '../lesson/lesson.service';
import { createLesson } from '../models/create-lesson-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lessonList?: any[];
  id?: any;

  constructor(private lessonService: LessonService, private router: Router) { }

  ngOnInit(): void {
    this.lessonService.getAllLessons().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) // store the key
      )
    ).subscribe(lessons => {
      this.lessonList = lessons;
    });
  }

  directToContent(lessonKey: any): void {
    this.id = lessonKey;
    this.router.navigate(['/content', this.id]);
  }

  directToAddlesson(): void {
    this.router.navigate(['/addLesson']);
  }
}
