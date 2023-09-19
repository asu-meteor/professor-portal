import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
  { path: 'filedetails', component: FileDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NavBarComponent,
    FileDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    materialModules,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
