import { Component } from '@angular/core';
import { createLesson } from '../models/create-lesson-model';
import { CreateLessonService } from '../create-lesson/create-lesson.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent {
  // Defining variables and assigning values to it
  createlesson: createLesson = new createLesson();

  constructor(private createlessonservice: CreateLessonService, private snackBarService: SnackbarService) { }

  // Updating dbPath
  // Adding lesson description to the new db created
  newLesson(): void {
    this.createlessonservice.create(this.createlesson).then(() => {
      this.snackBarService.showSnackbar("Successfully created: " + this.createlesson?.lessonName);
    }).catch(error => {
      this.snackBarService.showSnackbar("Error creating: " + this.createlesson?.lessonName);
      console.error('Error creating lesson:', error);
    })
  }
}
