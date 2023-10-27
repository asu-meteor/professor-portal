import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Importing Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { CustomComponentsComponent } from './custom-components/custom-components.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { FileCardComponent } from './components/file-card/file-card.component';

// Importing Firebase Modules
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './components/field/field.component';
import { LessonComponent } from './lesson/lesson.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { LessonContentComponent } from './lesson-content/lesson-content.component';
import { ContentPreviewComponent } from './content-preview/content-preview.component';

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatListModule,
  MatIconModule,
  MatTabsModule,
  MatGridListModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSnackBarModule
];

const routes: Routes = [
  { path: '', redirectTo: '/fileupload', pathMatch: 'full' },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'filedetails', component: FileDetailsComponent },
  { path: 'customcomponents', component: CustomComponentsComponent },
  { path: '', redirectTo: 'lesson', pathMatch: 'full' },
  { path: 'fileupload/:lessonId', component: FileUploadComponent },
  { path: 'filedetails', component: FileDetailsComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'addLesson', component: CreateLessonComponent },
  { path: 'content/:id', component: LessonContentComponent },
  { path: 'contentView/:lessonId/:contentId', component: ContentPreviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NavBarComponent,
    FileDetailsComponent,
    ModalComponent,
    ButtonComponent,
    FieldComponent,
    CustomComponentsComponent,
    LessonCardComponent,
    FileCardComponent,
    LessonComponent,
    CreateLessonComponent,
    LessonContentComponent,
    ContentPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    materialModules,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
