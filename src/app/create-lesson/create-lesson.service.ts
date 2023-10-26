import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { createLesson } from '../models/create-lesson-model';

@Injectable({
  providedIn: 'root'
})
export class CreateLessonService {
  // Parent dbPath
  private dbPath = '/Lessons';

  lessonsRef: AngularFireList<createLesson>;

  constructor(private db: AngularFireDatabase) {
    this.lessonsRef = db.list(this.dbPath);
  }

  // Adding lesson description
  create(lesson: any): any {
    return this.lessonsRef.push(lesson);
  }
}
