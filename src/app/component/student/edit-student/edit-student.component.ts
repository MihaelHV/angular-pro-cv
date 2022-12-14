import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  myForm!: FormGroup;
  student!: Student;
  idStudent: any;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.loadStudent();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      idStudent: [''],
      firstName: [''],
      lastName: [''],
      dni: [''],
      email: [''],
      cellphone: [''],
    });
  }

  loadStudent() {
    this.idStudent = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.idStudent).subscribe((data) => {
      this.student = data;
      this.myForm = this.fb.group({
        idStudent: [this.student.idStudent],
        firstName: [this.student.firstName],
        lastName: [this.student.lastName],
        dni: [this.student.dni],
        email: [this.student.email],
        cellphone: [this.student.cellphone],
      });
    });
  }

  updateStudent(): void {
    const student: Student = {
      idStudent: parseInt(this.idStudent),
      firstName: this.myForm.get('firstName')!.value,
      lastName: this.myForm.get('lastName')!.value,
      dni: this.myForm.get('dni')!.value,
      email: this.myForm.get('email')!.value,
      cellphone: this.myForm.get('cellphone')!.value,
    };

    console.log(student);

    this.studentService.updateStudent(this.idStudent, student).subscribe({
      next: (data) => {
        this.snackBar.open('La aesoria fue actualizada con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
