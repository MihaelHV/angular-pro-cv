import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddStudentComponent } from './component/student/add-student/add-student.component';
import { EditStudentComponent } from './component/student/edit-student/edit-student.component';
import { ListStudentComponent } from './component/student/list-student/list-student.component';
import { ToolbarComponent } from './component/toolbar/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './component/shared/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
