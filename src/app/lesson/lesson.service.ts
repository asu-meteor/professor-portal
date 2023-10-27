import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { createLesson } from '../models/create-lesson-model'

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private basePath = '/Lessons';

  lessonRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.lessonRef = db.list(this.basePath);
  }

  getAllLessons(): AngularFireList<any> {
    return this.lessonRef;
  }
}
