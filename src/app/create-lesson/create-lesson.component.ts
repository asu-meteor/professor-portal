import { Component } from '@angular/core';
import { createLesson } from '../models/create-lesson-model';
import { CreateLessonService } from '../create-lesson/create-lesson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent {
  // Defining variables and assigning values to it
  createlesson: createLesson = new createLesson();

  constructor(private createlessonservice: CreateLessonService) { }

  // Updating dbPath
  // Adding lesson description to the new db created
  newLesson(): void {
    this.createlessonservice.create(this.createlesson).then(() => {
      console.log('Created new lesson');
    })
  }
}
