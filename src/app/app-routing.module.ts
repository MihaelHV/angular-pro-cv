import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListAdvisoryComponent } from './component/advisory/list-advisory/list-advisory.component';
import { AddAdvisoryComponent } from './component/advisory/add-advisory/add-advisory.component';
import { EditAdvisoryComponent } from './component/advisory/edit-advisory/edit-advisory.component';
import { ListStudentComponent } from './component/student/list-student/list-student.component';
import { AddStudentComponent } from './component/student/add-student/add-student.component';
import { EditStudentComponent } from './component/student/edit-student/edit-student.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'advisories', component: ListAdvisoryComponent },
  { path: 'advisories/new', component: AddAdvisoryComponent },
  { path: 'advisories/edit/:id', component: EditAdvisoryComponent },

  { path: 'students', component: ListStudentComponent },
  { path: 'students/new', component: AddStudentComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
