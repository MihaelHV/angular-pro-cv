import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css'],
})
export class EditTeacherComponent implements OnInit {
  myForm!: FormGroup;
  teacher!: Teacher;
  idTeacher: any;

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.loadTeacher();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      idTeacher: [''],
      firstName: [''],
      lastName: [''],
      dni: [''],
      email: [''],
      cellphone: [''],
    });
  }

  loadTeacher() {
    this.idTeacher = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(this.idTeacher).subscribe((data) => {
      this.teacher = data;
      this.myForm = this.fb.group({
        idTeacher: [this.teacher.idTeacher],
        firstName: [this.teacher.firstName],
        lastName: [this.teacher.lastName],
        dni: [this.teacher.dni],
        email: [this.teacher.email],
        cellphone: [this.teacher.cellphone],
      });
    });
  }

  updateTeacher(): void {
    const teacher: Teacher = {
      idTeacher: parseInt(this.idTeacher),
      firstName: this.myForm.get('firstName')!.value,
      lastName: this.myForm.get('lastName')!.value,
      dni: this.myForm.get('dni')!.value,
      email: this.myForm.get('email')!.value,
      cellphone: this.myForm.get('cellphone')!.value,
    };

    console.log(teacher);

    this.teacherService.updateTeacher(this.idTeacher, teacher).subscribe({
      next: (data) => {
        this.snackBar.open('Los datos fueron actulizados!', '', {
          duration: 6000,
        });
        this.router.navigate(['/teachers']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
